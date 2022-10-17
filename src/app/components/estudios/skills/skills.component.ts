import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  icono: string = 'hola';
  item: string = 'html';
  html: string = "assets/iconos/html.png";
  css: string = "assets/iconos/css.png";
  javascript: string = "assets/iconos/javascript.png";
  angular: string = "assets/iconos/angular.png";
}
