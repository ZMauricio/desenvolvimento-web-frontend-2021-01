import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public senhaConfirmacao: string = '';

  public usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    tipo: 0,
    rua: '',
    numero: 0,
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  constructor(private usuariosService: UsuariosService,
              private rota: Router,
              private httpCliente: HttpClient) { }

  ngOnInit(): void {
  }

  public registrar() {
    this.usuariosService.add(this.usuario).subscribe((resposta)=>{
      console.log('Registrar resposta', resposta);
      this.rota.navigate(['/login']);
    }, (erro)=> {
      console.error('Registrar erro: ', erro);
    });
  }

  public consultarCEP(cepParam:any, form:any) {

    console.log(cepParam.value);

    let cep: string = String(cepParam.value);

    cep = cep.replace(/\D/g, '');

    if (cep !="") {

      let validaCEP = /^[0-9]{8}$/;

      if (validaCEP.test(cep)) {

        this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json`).subscribe((dados)=>{
          console.log('dados', dados);

          this.limparCampos(form);
          this.preencherFormulario(dados, form);
        });

      }


    }

  }

  public preencherFormulario(dados: any, form: any) {
    console.log('Preencher dados: ', dados);
    console.log(form.value);

    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      senha: form.value.senha,
      rsenha: form.value.rsenha,
      endereco: {
        cep: dados.cep,
        numero: 0,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }

  public limparCampos(form: any) {
    form.form.patchValue({
      endereco: {
        cep: null,
        numero: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  public onSubmit(form:any) {
    console.log(form.value);
    console.log(form.value.endereco);

    if (form.valid) {

      this.usuariosService.add(this.usuario).subscribe((resposta)=>{
        console.log('Registrar resposta', resposta);
        this.rota.navigate(['/login']);
      }, (erro)=> {
        console.error('Registrar erro: ', erro);
      });

    }

  }
}
