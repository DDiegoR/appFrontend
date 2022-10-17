import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { SitiowebComponent } from './sitioweb/sitioweb.component';
import { SimonComponent } from './simon/simon.component';
import { ProyectosComponent } from './proyectos.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    ProyectosComponent,
    PortfolioComponent,
    SitiowebComponent,
    SimonComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
  ]
})
export class ProyectosModule { }
