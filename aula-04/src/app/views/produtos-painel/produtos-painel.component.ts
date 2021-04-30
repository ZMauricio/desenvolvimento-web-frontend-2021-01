import { Component, OnInit } from '@angular/core';


import { Produto } from 'src/app/models/produto.model';

import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-painel',
  templateUrl: './produtos-painel.component.html',
  styleUrls: ['./produtos-painel.component.scss']
})
export class ProdutosPainelComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getAll().subscribe((produtosList: Produto[])=>{
      this.produtos = produtosList;
    })
  }

}
