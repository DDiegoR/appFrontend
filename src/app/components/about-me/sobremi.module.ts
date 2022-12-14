import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SobremiRoutingModule } from './sobremi-routing.module';

import { FormularioSobremiComponent } from './formulario-sobremi/formulario-sobremi.component';
import { GralSobremiComponent } from './gral-sobremi/gral-sobremi.component';
import { AboutMeComponent } from './about-me.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    FormularioSobremiComponent,
    GralSobremiComponent
  ],
  imports: [
    CommonModule,
    SobremiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class SobremiModule { }
