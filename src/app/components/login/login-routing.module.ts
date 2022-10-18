import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { RegistroComponent } from '../registro/registro.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,
    children: [
      {path: '', redirectTo: 'principal-login', pathMatch: 'full'},
      {path: 'principal-login', component: PrincipalLoginComponent},
      {path: 'registro', component: RegistroComponent,
        children: [
          {path: 'principal-login', component: LoginComponent}
        ]},
    ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }
