import { Component } from '@angular/core';

let nombre: string = 'Diego Romero';
let rol: string = 'Full Stack Developer Jr'

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  nombre = nombre;
  rol = rol;
}
