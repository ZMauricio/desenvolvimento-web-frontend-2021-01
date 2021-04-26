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
    tipo: 0
  };

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public logar() {
    this.auth.realizarLogin(this.usuario);
  }

}
