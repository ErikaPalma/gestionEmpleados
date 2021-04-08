import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

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

  constructor(private empleadoService: EmpleadoService) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.cargarEmpleados();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(): void {
    this.empleadoList = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.empleadoList);
  }
  eliminarEmpleado(index: number) {
    // llamo al método del servicio y elimino el empleado
    this.empleadoService.eliminarEmpleado(index);
    // llamo a este método para que se vuelva a renderizar la tabla
    this.cargarEmpleados();
  }
}
