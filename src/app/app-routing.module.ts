import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpleadoComponent } from './empleados/components/edit-empleado/edit-empleado.component';
import { EmpleadoListComponent } from './empleados/components/empleado-list/empleado-list.component';

const routes: Routes = [
  {
    path: 'crear',
    component: EditEmpleadoComponent,
  },
  {
    path: '',
    component: EmpleadoListComponent,
  },
  {
    path: 'editar/:id',
    component: EditEmpleadoComponent,
  },
  {
    path: '**',
    component: EmpleadoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
