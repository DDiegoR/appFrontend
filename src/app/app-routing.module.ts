import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

// Defino las rutas
const routes: Routes = [
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'login',component: LoginComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
