import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from 'src/app/shared/confirmacion/confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss'],
})
export class EmpleadoListComponent {
  displayedColumns: string[] = [
    'nombre',
    'apellidos',
    'telefono',
    'email',
    'fechaAlta',
    'acciones',
  ];
  dataSource = new MatTableDataSource();
  empleadoList: Empleado[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empleadoService: EmpleadoService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.cargarEmpleados();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(): void {
    this.empleadoList = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.empleadoList);
    // paginación y ordenamiento
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  eliminarEmpleado(index: number) {
    // le paso mi componente de confirmación
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      width: '350px',
      data: { mensaje: '¿Estás seguro de borrar este empleado?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // si se pulsa aceptar, se elimina
      if (result === 'aceptar') {
        // Cuando se cierra el dialog ejecuto lo siguiente:
        // llamo al método del servicio y elimino el empleado
        this.empleadoService.eliminarEmpleado(index);
        // llamo a este método para que se vuelva a renderizar la tabla
        this.cargarEmpleados();
        // snackBar con la confirmación de la eliminación
        this.snackBar.open('El empleado ha sido eliminado con exito', '', {
          duration: 3000,
        });
      }
    });
  }
}
