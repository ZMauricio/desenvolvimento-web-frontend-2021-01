import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';

import { ClientesComponent } from './clientes.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component';
import { ClientesGuardService } from 'src/app/guards/clientes-guard.service';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteNovoComponent,
    ClienteDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientesRoutingModule
  ],
  providers: [
    ClientesGuardService
  ]
})
export class ClientesModule {}
