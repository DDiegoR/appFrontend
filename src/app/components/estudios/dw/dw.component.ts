import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dw',
  templateUrl: './dw.component.html',
  styleUrls: ['./dw.component.css']
})
export class DwComponent {
  rutaImagen: string;

  cargarRuta(){
    this.rutaImagen = "assets/imagenes/tituloIEN.png";
  }
}
