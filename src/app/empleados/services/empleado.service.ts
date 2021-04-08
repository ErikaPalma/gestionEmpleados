import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  empleadosList: Empleado[] = [
    {
      nombre: 'Lily',
      apellidos: 'Vincent',
      telefono: 123456789,
      email: 'lily@gmail.com',
      fechaAlta: new Date('2021-02-25'),
    },
    {
      nombre: 'James',
      apellidos: 'Stanley',
      telefono: 555698741,
      email: 'james@gmail.com',
      fechaAlta: new Date('2029-01-27'),
    },
    {
      nombre: 'Jack',
      apellidos: 'Lyons',
      telefono: 987456321,
      email: 'jack@gmail.com',
      fechaAlta: new Date('2016-12-25'),
    },
    {
      nombre: 'Ellis',
      apellidos: 'hart',
      telefono: 123456789,
      email: 'ellis@gmail.com',
      fechaAlta: new Date('2028-10-05'),
    },
    {
      nombre: 'Jasmine',
      apellidos: 'Watson',
      telefono: 258741369,
      email: 'jasmine@gmail.com',
      fechaAlta: new Date('2020-10-15'),
    },
    {
      nombre: 'Isabel',
      apellidos: 'Davis',
      telefono: 963256987,
      email: 'isable@gmail.com',
      fechaAlta: new Date('2021-02-25'),
    },
    {
      nombre: 'William',
      apellidos: 'Bolton',
      telefono: 741254879,
      email: 'will@gmail.com',
      fechaAlta: new Date('2008-02-14'),
    },
  ];

  constructor() {}

  getEmpleados() {
    return this.empleadosList.slice();
  }

  eliminarEmpleado(index: number) {
    this.empleadosList.splice(index, 1);
  }
}
