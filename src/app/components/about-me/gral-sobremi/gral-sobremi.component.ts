import { Component } from '@angular/core';

let sobreMi: string = "!Hola! Mi nombre es Diego, vivo en Corrientes - Argentina y soy Full Stack Developer Jr. " +
  "Una de las cosas que me gusta mucho es poder dar 'vida' a una página web. " +
  "El desarrollo web me comenzó a llamar la atención en 2020 cuando un amigo me contó sobre eso. " +
  "Decidí empezar a realizar cursos de Introducción a Front End, aprendiendo HTML-CSS y un poco de Javascript. " + 
  "A medida que iba creando cosas y practicando, mi interés hacia el desarrolo web fue creciendo más, " +
  "realicé otro curso ya de Full Stack en donde pude aprender muchas cosas más sobre como crear mi propio sitio web. " +
  "Mi enfoque principal es recibirme de la universidad como Ingeniero en Sistemas de Información, " +
  "pero aún así me gusta mucho trabajar como Full Stack Developer Jr. ";
  
  
  let imagenPerfil: string = "assets/imagenes/perfil2.jpeg";

  let experiencias = [
    {empresa: "inserte empresa", rol: "inserte rol", logo: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/video-thumbnails/k73D0tcllio5crwjhzK.jpg?itok=HcZ1R58q", 
     descripcion: "inserte descripcion", fechaInicio: "1641006000000", fechaFin: "1641006000000"},
  ];


@Component({
  selector: 'gral-sobremi',
  templateUrl: './gral-sobremi.component.html',
  styleUrls: ['./gral-sobremi.component.css']
})
export class GralSobremiComponent {

  experiencias = experiencias;
  sobreMi = sobreMi;
  imagenPerfil = imagenPerfil

}
