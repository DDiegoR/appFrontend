import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { EstudiosComponent } from 'src/app/components/estudios/estudios.component';
import { FacultadComponent } from 'src/app/components/estudios/facultad/facultad.component';
import { DwComponent } from 'src/app/components/estudios/dw/dw.component';
import { ApComponent } from 'src/app/components/estudios/ap/ap.component';


const routes: Routes = [
  {path: 'estudios', component: EstudiosComponent , 
    children: [
      {path: '', redirectTo: 'facultad', pathMatch: 'full'},
      {path: 'facultad', component: FacultadComponent},
      {path: 'dw', component: DwComponent},
      {path: 'ap', component: ApComponent},
    ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class EstudiosRoutingModule { }
