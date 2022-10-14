import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../components/principal/principal.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { RegistroComponent } from '../components/registro/registro.component';


// Defino las rutas
const routes: Routes = [
  {path: '', redirectTo: '/principal', pathMatch:'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'registro', component: RegistroComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
