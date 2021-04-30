import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: ''
  };

  public senhaConfirm: string = '';

  constructor(private usuarioService: UsuariosService, private rota: Router) { }

  ngOnInit(): void {
  }

  public registrar() {

    this.usuarioService.add(this.usuario).subscribe((resposta)=>{
      console.log('Registrar: ', resposta);
      this.rota.navigate(['/login']);
    }, (erro)=>{
        console.error('Registrar erro: ', erro);
        this.rota.navigate(['/login']);
    });

  }
}
