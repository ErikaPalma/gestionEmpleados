import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditEmpleadoComponent } from './empleados/components/edit-empleado/edit-empleado.component';
import { EmpleadoListComponent } from './empleados/components/empleado-list/empleado-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ConfirmacionComponent } from './shared/confirmacion/confirmacion.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    EditEmpleadoComponent,
    EmpleadoListComponent,
    NavbarComponent,
    ConfirmacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
