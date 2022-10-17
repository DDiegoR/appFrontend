import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

    constructor(private router: Router) {}
}
