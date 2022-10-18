import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.css']
})

export class PrincipalLoginComponent implements OnInit {
  form: FormGroup;
    
  constructor(private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  get Mail() {
    return this.form.get("email");
  }
  get Password() {
    return this.form.get("password");
  }

  get EmailValid() { 
    return false;
  }
  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
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
