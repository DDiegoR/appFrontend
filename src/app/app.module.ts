import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { EstudiosModule } from './components/estudios/estudios.module';
import { ProyectosModule } from './components/proyectos/proyectos.module';
import { LoginModule } from './components/login/login.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RedesComponent } from './components/redes/redes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EdicionComponent } from './components/edicion/edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    PrincipalComponent,
    RedesComponent,
    ContactoComponent,
    EdicionComponent,
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
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
