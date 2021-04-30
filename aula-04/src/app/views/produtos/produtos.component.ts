import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/models/produto.model';

import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  public produtos: Array<Produto> = [];

  constructor(private produtoService: ProdutosService) {
  }

  ngOnInit(): void {

    this.produtoService.getAll().subscribe((produtosList: Produto[])=>{
      this.produtos = produtosList;
    },
    (erro)=>{
      console.error('Erro: ', erro);
    });

  }

}
