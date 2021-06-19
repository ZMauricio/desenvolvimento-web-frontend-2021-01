import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { ProdutosGuardService } from 'src/app/guards/produtos-guard.service';

import { ProdutosComponent } from './produtos.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { ProdutoInfoComponent } from './produto-info/produto-info.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosControlComponent } from './produtos-control/produtos-control.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoNovoComponent,
    ProdutoInfoComponent,
    ProdutoDetalhesComponent,
    ProdutosListaComponent,
    ProdutosControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProdutosRoutingModule
  ],
  providers: [
    ProdutosGuardService
  ]
})
export class ProdutosModule { }
