import { Component } from '@angular/core';

let nombre: string = 'Diego Romero';
let rol: string = 'Full Stack Developer Jr'


@Component({
  selector: 'gral',
  templateUrl: './gral.component.html',
  styleUrls: ['./gral.component.css']
})
export class GralComponent {
  nombre = nombre;
  rol = rol;
}
