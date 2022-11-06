import { Component } from '@angular/core';

let titulo: string = "Full Stack Developer Jr";
let link: string = "https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa";
let nombreLink: string = "@Argentina Programa";
let descripcion: string = "Realicé el curso de Full Stack Developer Jr dictado por Argentina Programa... ";
let fecha_inicio = "1646017200000";
let fecha_fin = "1675134000000";
let rutaImagen = "assets/imagenes/ap.png";


@Component({
  selector: 'ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.css']
})
export class ApComponent{
  titulo = titulo;
  link = link;
  nombreLink = nombreLink;
  descripcion = descripcion;
  fecha_inicio = fecha_inicio;
  fecha_fin = fecha_fin;
  rutaImagen = rutaImagen;

  cargarRuta(){
    this.rutaImagen = rutaImagen;
  }
}
