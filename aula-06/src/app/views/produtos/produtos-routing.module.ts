import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosGuardService } from 'src/app/guards/produtos-guard.service';

import { ProdutosComponent } from './produtos.component';
import { ProdutoInfoComponent } from 'src/app/views/produtos/produto-info/produto-info.component';
import { ProdutoNovoComponent } from 'src/app/views/produtos/produto-novo/produto-novo.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosControlComponent } from './produtos-control/produtos-control.component';

const routes: Routes = [
 {
   path: '',
   component: ProdutosComponent,
   children: [
     {
      path: 'lista',
      component: ProdutosListaComponent
     },
     {
      path: 'control',
      component: ProdutosControlComponent,
      canActivateChild: [ProdutosGuardService]
     },
     {
      path: 'novo',
      component: ProdutoNovoComponent,
      canActivateChild: [ProdutosGuardService]
     },
     {
      path: 'info/:id',
      component: ProdutoInfoComponent
     },
     {
      path: 'detalhes/:id',
      component: ProdutoDetalhesComponent,
      canActivateChild: [ProdutosGuardService]
     }
   ]
 }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProdutosRoutingModule {}
