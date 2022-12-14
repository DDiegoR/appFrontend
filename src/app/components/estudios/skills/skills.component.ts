import { Component } from '@angular/core';

let habilidades = [
  {idHabilidad: 1, titulo: "Gestión del tiempo", porcentaje: 90},
  {idHabilidad: 2, titulo: "Trabajo en equipo", porcentaje: 80},
  {idHabilidad: 3, titulo: "Adaptabilidad", porcentaje: 80},
  {idHabilidad: 4, titulo: "Resolución de problemas", porcentaje: 70},
  {idHabilidad: 5, titulo: "Desarrollo Web Full Stack", porcentaje: 95},
  {idHabilidad: 6, titulo: "Manejo de recursos tecnológicos", porcentaje: 80},
];
let tecnologias = [
  {idTecnologia: 1, titulo: "HTML", imagen:"assets/iconos/html.png"},
  {idTecnologia: 2, titulo: "CSS", imagen:"assets/iconos/css.png"},
  {idTecnologia: 3, titulo: "JAVASCRIPT", imagen:"assets/iconos/javascript.png"},
  {idTecnologia: 4, titulo: "ANGULAR", imagen:"assets/iconos/angular.png"},
  {idTecnologia: 5, titulo: "MySQL", imagen:"assets/iconos/mysql.png"},
  {idTecnologia: 6, titulo: "JAVA", imagen:"assets/iconos/java.png"},
];

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  habilidades = habilidades;
  tecnologias = tecnologias;
}
