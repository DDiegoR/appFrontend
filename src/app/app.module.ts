import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { EstudiosModule } from './components/estudios/estudios.module';
import { ProyectosModule } from './components/proyectos/proyectos.module';
import { PrincipalModule } from './components/principal/principal.module';
import { SobremiModule } from './components/about-me/sobremi.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RedesComponent } from './components/redes/redes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent,
    ContactoComponent,
    EdicionComponent,
    MenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    EstudiosModule,
    ProyectosModule,
    PrincipalModule,
    SobremiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
