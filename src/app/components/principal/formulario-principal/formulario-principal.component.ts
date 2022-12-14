import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.css']
})
export class FormularioPrincipalComponent implements OnInit {
  form: FormGroup;
    
  constructor(private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    name: ['',[]],
    rol: ['', []],
    })
  }

  ngOnInit(): void {
  }


  onEnviar(event: Event) {
    event?.preventDefault;
    if (this.form.valid) {
      //Llamamos a nuestro servicio para enviar los datos al servidor
      //Tambien podriamos ejecutar alguna lógica extra
    } else {
      this.form.markAllAsTouched();
    }
  }

}
