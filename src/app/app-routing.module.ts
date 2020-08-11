import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarService } from './componentes/editar/editar.service';
import { Equiposguard } from './services/equipos.guard';
import { ListaComponent } from './componentes/lista/lista.component';
import { ListarService } from './componentes/lista/listar.service';


const routes: Routes = [
  {
    path: 'equipos/listar',
    component: ListaComponent,
    resolve: {
      data: ListarService
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },

  {
    path: 'crear/equipo',
    component: FormularioComponent, canActivate: [Equiposguard]
  },
  {
    path: 'equipos/:id/editar',
    component: EditarComponent, canActivate: [Equiposguard],
    resolve: {
      data: EditarService
    }

  },

  { path: 'login', component: LoginComponent },

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule,
  ],

  providers: [
    ListarService,
  ],
})
export class AppRoutingModule { }
