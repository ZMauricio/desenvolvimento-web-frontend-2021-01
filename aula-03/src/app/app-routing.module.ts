import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './views/produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './views/produto-novo/produto-novo.component';
import { ProdutosControlComponent } from './views/painel/produtos-control/produtos-control.component';
import { ProdutoInfoComponent } from './views/produto-info/produto-info.component';

import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './views/login/login.component';


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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produto-info/:id',
    component: ProdutoInfoComponent
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalhesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produtos-control',
    component: ProdutosControlComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
