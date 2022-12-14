import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal.component';
import { FormularioPrincipalComponent } from './formulario-principal/formulario-principal.component';
import { GralComponent } from './gral/gral.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent,
    children: [
      {path: '', redirectTo: 'gral', pathMatch: 'full'},
      {path: 'gral', component: GralComponent},
      {path: 'formulario-principal', component: FormularioPrincipalComponent}
    ]}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PrincipalRoutingModule { }
