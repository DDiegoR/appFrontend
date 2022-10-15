import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  {path: 'proyectos', component: ProyectosComponent,
    children: [
      {path: '', redirectTo: 'proyectos', pathMatch: 'full'},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class ProyectosRoutingModule { }
