import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MaterialModule } from './models/material/material.module';

import {  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatListModule
   } from '@angular/material';
import { EditarComponent } from './componentes/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaEmpleadosComponent,
    MenuComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditarComponent]
})
export class AppModule { }
