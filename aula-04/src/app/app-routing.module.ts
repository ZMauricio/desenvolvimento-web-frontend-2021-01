import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/views/home/home.component';
import { ProdutosComponent } from 'src/app/views/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './views/produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './views/produto-novo/produto-novo.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';

import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { ProdutosPainelComponent } from './views/produtos-painel/produtos-painel.component';


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
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'painel',
    component: ProdutosPainelComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalhesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
