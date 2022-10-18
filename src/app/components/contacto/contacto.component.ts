import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      message:['',[Validators.required]]
    })
  }

  ngOnInit() {}

  get Name() {
    return this.form.get("name");
  }

  get Message(){
    return this.form.get("message");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get NameValid() {
    return !this.Name?.valid;
  }

  get MailValid() {
    return false;
  }
  
  get MessageValid(){
    return !this.Message?.valid;
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
