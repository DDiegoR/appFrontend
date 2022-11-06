import { Component } from '@angular/core';

let titulo: string = "Donde estudio";
let link: string = "https://www.frre.utn.edu.ar/";
let nombreLink: string = "@Facultad";
let descripcion: string = "Actualmente estoy estudiando Ingeniería en Sistemas de Información en la Universidad Tecnológia Nacional Facultad Regional de Resistencia.";
let fecha_inicio = "1456801200000";
let fecha_fin = "Presente";

@Component({
  selector: 'facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent {

  titulo = titulo;
  link = link;
  nombreLink = nombreLink;
  descripcion = descripcion;
  fecha_inicio = fecha_inicio;
  fecha_fin = fecha_fin;
}
