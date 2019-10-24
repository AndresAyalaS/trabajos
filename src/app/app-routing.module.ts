import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EditarComponent } from './componentes/editar/editar.component';


const routes: Routes = [
  { path: '', component: ListaEmpleadosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'edit', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
