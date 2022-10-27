import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectosComponent } from './proyectos.component';
import { ItemsComponent } from './items/items.component';	
import { PortfolioComponent} from './portfolio/portfolio.component';
import { SimonComponent } from './simon/simon.component';
import { SitiowebComponent } from './sitioweb/sitioweb.component';

const routes: Routes = [
  {path: 'proyectos', component: ProyectosComponent,
    children: [
      {path: '', redirectTo: 'items', pathMatch: 'full'},
      {path: 'items', component: ItemsComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'simon', component: SimonComponent},
      {path: 'sitioweb', component: SitiowebComponent},
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProyectosRoutingModule { }
