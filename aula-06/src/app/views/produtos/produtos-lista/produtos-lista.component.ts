import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/services/produtos.service';

import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {

    this.produtosService.getProdutos().subscribe(

      (resposta: Produto[]) => {
        this.produtos = resposta;
      }

    );

  }

}
