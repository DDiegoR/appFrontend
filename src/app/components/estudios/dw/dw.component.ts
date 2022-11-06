import { Component, OnInit } from '@angular/core';

let titulo: string = "Diseñador Web";
let link: string = "http://web.ienvirtual.com.ar/";
let nombreLink: string = "@ien";
let descripcion: string = "Uno de los cursos que realice fue el de Diseñador Web dictado por el Instituto Educativo Económico Nacional (ien) el cual me sirvió mucho para dar mis primero pasos en el gran mundo del FrontEnd.";
let fecha_inicio = "1627700400000";
let fecha_fin = "1640746800000";
let rutaImagen = "assets/imagenes/tituloIEN.png"
@Component({
  selector: 'dw',
  templateUrl: './dw.component.html',
  styleUrls: ['./dw.component.css']
})
export class DwComponent {
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
