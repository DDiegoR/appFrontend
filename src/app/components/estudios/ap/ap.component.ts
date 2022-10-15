import { Component } from '@angular/core';

@Component({
  selector: 'ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.css']
})
export class ApComponent{
  rutaImagen: string;

  cargarRuta(){
    this.rutaImagen = "assets/imagenes/ap.png";
  }
}
