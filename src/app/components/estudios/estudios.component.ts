import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let ESTUDIOS = [
  {path: "/estudios/facultad", nombre: "Universidad"},
  {path: "/estudios/dw", nombre: "Curso Diseñador Web"},
  {path: "/estudios/ap", nombre: "Full Stack Developer Jr"}
];

@Component({
  selector: 'estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios = ESTUDIOS;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
}
