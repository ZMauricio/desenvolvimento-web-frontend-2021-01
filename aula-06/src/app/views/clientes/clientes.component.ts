import { Component, OnInit } from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  public clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {
    this.clientesService.getAll().subscribe((clientes: Cliente[])=>{
      this.clientes = clientes;
      console.log(this.clientes);
    });
  }

  ngOnInit(): void {
    this.clientesService.msgUpdateClientes.subscribe((msg)=>{
      if (msg) {
        this.clientesService.getAll().subscribe((clientes: Cliente[])=>{
          this.clientes = clientes;
          console.log(this.clientes);
        });
      }
    });
  }

  ngOnDestroy() {

  }

}
