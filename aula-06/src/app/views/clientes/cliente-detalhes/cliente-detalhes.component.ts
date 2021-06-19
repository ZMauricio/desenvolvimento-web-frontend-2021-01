import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.scss']
})
export class ClienteDetalhesComponent implements OnInit {
  public clienteForm: FormGroup;

  inscricao: Subscription;

  private id: number = 0;


  constructor(private rota: Router,
              private formBuilder: FormBuilder,
              private rotaAtiva: ActivatedRoute,
              private clientesService: ClientesService) {

      this.clienteForm = this.formBuilder.group({
                  nome: ['', Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(150)])],
                  email: ['', Validators.compose([Validators.required, Validators.email])],
                  senha: ['', Validators.required],
                  rua: ['', Validators.required],
                  numero: ['0',Validators.compose([Validators.required, Validators.min(0)])],
                  complemento: ['', Validators.required],
                  bairro: ['', Validators.required],
                  cidade: ['', Validators.required],
                  estado: ['', Validators.required],
                  status: [''],
      });


    this.inscricao = this.rotaAtiva.params.subscribe((dados: any)=>{
      this.id = dados['id'];
      this.id = Number(this.id);

      this.clientesService.getById(this.id).subscribe((cliente: Cliente)=>{
        this.clienteForm.controls['nome'].setValue(cliente.nome);
        this.clienteForm.controls['email'].setValue(cliente.email);
        this.clienteForm.controls['senha'].setValue(cliente.senha);
        this.clienteForm.controls['rua'].setValue(cliente.rua);
        this.clienteForm.controls['numero'].setValue(cliente.numero);
        this.clienteForm.controls['complemento'].setValue(cliente.complemento);
        this.clienteForm.controls['bairro'].setValue(cliente.bairro);
        this.clienteForm.controls['cidade'].setValue(cliente.cidade);
        this.clienteForm.controls['estado'].setValue(cliente.estado);
        this.clienteForm.controls['status'].setValue(cliente.status);
      });

    });

  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  public deletar() {
    this.clientesService.deletar(this.id).subscribe(()=>{
      this.clientesService.msgUpdateClientes.emit(true);

      this.rota.navigate(['/clientes']);
    });
  }

  public salvar() {
    if (this.clienteForm.invalid || this.clienteForm.pending) {
      return ;
    }

    const cliente: Cliente = {
      id: this.id,
      nome: this.clienteForm.value.nome,
      email: this.clienteForm.value.email,
      senha: this.clienteForm.value.senha,
      rua: this.clienteForm.value.rua,
      numero: this.clienteForm.value.numero,
      complemento: this.clienteForm.value.complemento,
      cep: this.clienteForm.value.cep,
      bairro: this.clienteForm.value.bairro,
      cidade: this.clienteForm.value.cidade,
      estado: this.clienteForm.value.estado,
      status: false
    };

    this.clientesService.update(cliente).subscribe(()=>{

      this.clientesService.msgUpdateClientes.emit(true);

      this.rota.navigate(['/clientes']);
    });
  }

}
