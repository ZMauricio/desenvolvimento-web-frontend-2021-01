import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  private admin: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(private rota: Router, private usuariosService: UsuariosService) { }

  public realizarLogin(usuario: Usuario) {
    this.usuariosService.getByEmailPassword(usuario).subscribe((usuarioAuth: Usuario[])=>{
      console.log('usuarioAuth', usuarioAuth);

      const [user] = usuarioAuth;

      if (usuarioAuth) {
        if (usuario.email === user.email && usuario.senha === user.senha) {

          this.usuarioAutenticado = true;

          if (user.tipo === 1) {
            this.admin = true;
          }

          this.mostrarMenuEmitter.emit(true);

          this.rota.navigate(['/home']);
        } else {
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
        }

      } else {
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
      }


    }, (erro)=>{
        console.error('Login erro: ', erro);
    });
  }

  public isUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  public isAdmin() {
    return this.admin;
  }

}
