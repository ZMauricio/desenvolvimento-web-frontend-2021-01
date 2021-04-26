import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  private email: string = 'goku@gmail.com';
  private senha: string = 'kamehameha';

  constructor(private rota: Router) { }

  public realizarLogin(usuario: Usuario) {

    if (usuario.email === this.email && usuario.senha === this.senha) {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.rota.navigate(['/home']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }

  public isUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

}
