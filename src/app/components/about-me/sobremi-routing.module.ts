import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me.component';
import { FormularioSobremiComponent } from './formulario-sobremi/formulario-sobremi.component';
import { GralSobremiComponent } from './gral-sobremi/gral-sobremi.component';

const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent,
    children: [
      {path: '', redirectTo: 'gral-sobremi', pathMatch: 'full'},
      {path: 'gral-sobremi', component: GralSobremiComponent},
      {path: 'FormularioSobremiComponent', component: FormularioSobremiComponent}
    ]}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class SobremiRoutingModule { }
