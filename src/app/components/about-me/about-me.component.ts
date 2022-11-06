import { Component } from '@angular/core';

 let sobreMi: string = "!Hola! Mi nombre es Diego, vivo en Corrientes - Argentina y soy Full Stack Developer Jr. " +
  "Una de las cosas que me gusta mucho es poder dar 'vida' a una página web. " +
  "El desarrollo web me comenzó a llamar la atención en 2020 cuando un amigo me contó sobre eso. " +
  "Decidí empezar a realizar cursos de Introducción a Front End, aprendiendo HTML-CSS y un poco de Javascript. " + 
  "A medida que iba creando cosas y practicando, mi interés hacia el desarrolo web fue creciendo más, " +
  "realicé otro curso ya de Full Stack en donde pude aprender muchas cosas más sobre como crear mi propio sitio web. " +
  "Mi enfoque principal es recibirme de la universidad como Ingeniero en Sistemas de Información, " +
  "pero aún así me gusta mucho trabajar como Full Stack Developer Jr. ";
  
  let saludo: string = "Te mando un saludo y gracias por pasarte por mi Portfolio Web!";
  
  let imagenPerfil: string = "assets/imagenes/perfil2.jpeg";

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  sobreMi = sobreMi;
  saludo = saludo;
  imagenPerfil = imagenPerfil
  

}
