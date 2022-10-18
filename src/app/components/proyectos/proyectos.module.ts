import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';

import { ProyectosComponent } from './proyectos.component';
import { ItemsComponent } from './items/items.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SitiowebComponent } from './sitioweb/sitioweb.component';
import { SimonComponent } from './simon/simon.component';

@NgModule({
  declarations: [
    ProyectosComponent,
    ItemsComponent,
    PortfolioComponent,
    SitiowebComponent,
    SimonComponent,
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
  ]
})
export class ProyectosModule { }
