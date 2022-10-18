import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { RegistroComponent } from '../registro/registro.component';


@NgModule({
  declarations: [
    LoginComponent,
    PrincipalLoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
