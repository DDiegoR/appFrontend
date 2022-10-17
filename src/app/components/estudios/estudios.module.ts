import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EstudiosRoutingModule } from './estudios-routing.module';

import { EstudiosComponent } from './estudios.component';
import { FacultadComponent } from './facultad/facultad.component';
import { DwComponent } from './dw/dw.component';
import { ApComponent } from './ap/ap.component';
import { ModalCertificadosComponent } from './modal-certificados/modal-certificados.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstudiosComponent,
    FacultadComponent,
    DwComponent,
    ApComponent,
    ModalCertificadosComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    EstudiosRoutingModule,
    FormsModule
  ]
})
export class EstudiosModule { }
