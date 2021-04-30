import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private autenticado: boolean = false;

  public menuEmissor = new EventEmitter<boolean>();

  constructor(private rota: Router, private usuarioService: UsuariosService) { }

  public realizarLogin(usuario: Usuario) {

    this.usuarioService.getByEmailPassword(usuario).subscribe((usuarioAuth: Usuario[])=>{

      console.log('usuarioAuth', usuarioAuth[0]);

      const [user] = usuarioAuth;


      if (user) {
        if (usuario.email === user.email && usuario.senha === user.senha) {
          this.autenticado = true;

          this.menuEmissor.emit(true);

          this.rota.navigate(['/home']);
        } else {
          this.autenticado = false;

          this.menuEmissor.emit(false);
        }
      }


    });

  }

  public isAutenticado(): boolean {
    return this.autenticado;
  }
}
