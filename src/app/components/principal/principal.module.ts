import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrincipalRoutingModule } from './principal-routing.module';

import { PrincipalComponent } from './principal.component';
import { FormularioPrincipalComponent } from './formulario-principal/formulario-principal.component';
import { GralComponent } from './gral/gral.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    FormularioPrincipalComponent,
    GralComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }
