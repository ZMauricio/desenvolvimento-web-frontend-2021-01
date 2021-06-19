import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    tipo: 0,
    rua: '',
    complemento: '',
    cep: '',
    numero: 0,
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public logar() {
    console.log('Aqui logar!');

    this.auth.realizarLogin(this.usuario);
  }

  public onSubmit(form: any) {

    console.log(form);
    console.log(form.value);
    console.log(form.value.email);

    this.usuario.email = form.value.email;
    this.usuario.senha = form.value.senha;

    this.auth.realizarLogin(this.usuario);
  }

}
