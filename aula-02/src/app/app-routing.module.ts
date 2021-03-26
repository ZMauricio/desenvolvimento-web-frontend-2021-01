import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './views/produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './views/produto-novo/produto-novo.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
