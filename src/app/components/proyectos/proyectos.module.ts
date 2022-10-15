import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProyectosRoutingModule } from './proyectos-routing.module';

import { ProyectosComponent } from './proyectos.component';

@NgModule({
  declarations: [
    ProyectosComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ProyectosRoutingModule,
  ]
})
export class ProyectosModule { }
