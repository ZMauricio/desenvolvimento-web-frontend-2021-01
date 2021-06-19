import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.scss']
})
export class ClienteNovoComponent implements OnInit {
  public clienteForm: FormGroup;

  public cliente: Cliente = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    rua: '',
    numero: 0,
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    status: false
  };

  constructor(private formBuilder: FormBuilder,
              private clientesService: ClientesService,
              private rota: Router) {

    this.clienteForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: [''],
      rua: [''],
      numero: ['0'],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
  }

  public cadastrar() {

    this.cliente = {
      id: 0,
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

    this.clientesService.add(this.cliente).subscribe(()=>{

      this.clientesService.msgUpdateClientes.emit(true);

      this.rota.navigate(['/clientes']);
    });
  }
}
