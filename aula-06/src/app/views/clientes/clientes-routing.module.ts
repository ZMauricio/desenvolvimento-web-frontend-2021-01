import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesGuardService } from 'src/app/guards/clientes-guard.service';

import { ClientesComponent } from './clientes.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    canActivateChild: [ClientesGuardService],
    children: [
      {
        path: 'novo',
        component: ClienteNovoComponent,
      },
      {
        path: 'detalhes/:id',
        component: ClienteDetalhesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ClientesRoutingModule { }
