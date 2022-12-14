import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let ESTUDIOS = [
  {nombre: "Universidad"},
  {nombre: "Curso Diseñador Web"},
  {nombre: "Full Stack Developer Jr"},
  {nombre: "Nuevo item 1"},
  {nombre: "Nuevo item 2"},
];


let titulo1: string = "Full Stack Developer Jr";
let link1: string = "https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa";
let nombreLink1: string = "@Argentina Programa";
let descripcion1: string = "Realicé el curso de Full Stack Developer Jr dictado por Argentina Programa... ";
let fecha_inicio1 = "1646017200000";
let fecha_fin1 = "1675134000000";
let rutaImagen = "assets/imagenes/ap.png";

let titulo2: string = "Full Stack Developer Jr";
let link2: string = "https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa";
let nombreLink2: string = "@Argentina Programa";
let descripcion2: string = "Realicé el curso de Full Stack Developer Jr dictado por Argentina Programa... ";
let fecha_inicio2 = "1646017200000";
let fecha_fin2 = "1675134000000";

let titulo3: string = "Full Stack Developer Jr";
let link3: string = "https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa";
let nombreLink3: string = "@Argentina Programa";
let descripcion3: string = "Realicé el curso de Full Stack Developer Jr dictado por Argentina Programa... ";
let fecha_inicio3 = "1646017200000";
let fecha_fin3 = "1675134000000";

@Component({
  selector: 'estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  titulo1 = titulo1;
  link1 = link1;
  nombreLink1 = nombreLink1;
  descripcion1 = descripcion1;
  fecha_inicio1 = fecha_inicio1;
  fecha_fin1 = fecha_fin1;
  rutaImagen = rutaImagen;

  titulo2 = titulo2;
  link2 = link2;
  nombreLink2 = nombreLink2;
  descripcion2 = descripcion2;
  fecha_inicio2 = fecha_inicio2;
  fecha_fin2 = fecha_fin2;

  titulo3 = titulo3;
  link3 = link3;
  nombreLink3 = nombreLink3;
  descripcion3 = descripcion3;
  fecha_inicio3 = fecha_inicio3;
  fecha_fin3 = fecha_fin3;


  cargarRuta(){
    this.rutaImagen = rutaImagen;
  }


  estudios = ESTUDIOS;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
}
