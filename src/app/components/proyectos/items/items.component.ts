import { Component } from '@angular/core';

let proyectos = [
  {idProyecto: 1, 
    titulo: "Portfolio Web", 
    descripcion: "Este portfolio lo realice en el curso de Argentina Programa #YoProgramo y es la pagina en la que estas ahora mismo. Fue una buena experiencia y un buen aprendizaje en donde pude volcar todo lo aprendido. El stack de trabajo que utilicé fue: HTML, CSS, Bootstrap, Javascript, Angular, Spring Boot, Java, MySQL, Heroku.",
    imagen: "assets/imagenes/portfolio.png",
    fecha_inicio: "1656385200000",
    fecha_fin: "1675134000000"
  },
  {idProyecto: 2, 
    titulo: "Primer Sitio Web", 
    descripcion: "Este sitio web lo diseñé en un curso de Diseñador Web. Es como una página en donde hay info sobre mí. Fue desarollada a modo de práctica y el stack de trabajo que utilicé fue: HTML, CSS, Bootstrap, JavaScript.",
    imagen: "assets/imagenes/sitioweb.png",
    fecha_inicio: "1643598000000",
    fecha_fin: "1643598000000"
  },
  {idProyecto: 3, 
    titulo: "Juego - Simón", 
    descripcion: "Este proyecto es de un juego que desarrollé junto a un grupo de amigos en la facultad, el nombre del grupo era Vulgary. Este juego es una versión digital del famoso juego electrónico Simon creado por Ralph Baer y Howard J. Morrison, su interfaz es simple ya que esta desarrollado para consola utilizando el lenguaje Python. Fue una linda experiencia de trabajo en equipo y creatividad.",
    imagen: "assets/imagenes/Simon.png",
    fecha_inicio: "1454209200000",
    fecha_fin: "1454209200000"
  },
  {idProyecto: 4, 
    titulo: "Tarjeta de Presentación", 
    descripcion: "Esta es una tarjeta de presentación web que diseñé en un curso de Diseñador Web. El stack de trabajo que utilicé fue: HTML, CSS, Bootstrap, JavaScript.",
    imagen: "assets/imagenes/aboutGH.png",
    fecha_inicio: "1643598000000",
    fecha_fin: "1643598000000"
  },
];


@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  proyectos = proyectos;
}
