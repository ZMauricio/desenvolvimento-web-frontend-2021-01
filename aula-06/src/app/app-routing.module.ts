import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';

import { AuthGuardService } from './guards/auth-guard.service';
import { ProdutosGuardService } from './guards/produtos-guard.service';

/*
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './views/produtos/produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './views/produtos/produto-novo/produto-novo.component';
import { ProdutosControlComponent } from './views/painel/produtos-control/produtos-control.component';
import { ProdutoInfoComponent } from './views/produtos/produto-info/produto-info.component';
*/



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
    loadChildren: ()=>import('src/app/views/produtos/produtos.module').then(m=> m.ProdutosModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'clientes',
    loadChildren: ()=>import('src/app/views/clientes/clientes.module').then(m=>m.ClientesModule),
    canActivate: [AuthGuardService]
  }

  /*
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
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
