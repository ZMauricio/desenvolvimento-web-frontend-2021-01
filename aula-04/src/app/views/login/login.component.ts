import { Component, OnInit } from '@angular/core';

import { AuthLoginService } from 'src/app/services/auth-login.service';
import { Usuario } from 'src/app/models/usuario.model';

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
    cpf: '',
    dataNascimento: ''
  };

  constructor(private authLogin: AuthLoginService) { }

  ngOnInit(): void {
  }

  public logar() {
    this.authLogin.realizarLogin(this.usuario);
  }
}
