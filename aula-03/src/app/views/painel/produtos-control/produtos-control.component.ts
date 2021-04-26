import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from './../../../models/produto.model';

@Component({
  selector: 'app-produtos-control',
  templateUrl: './produtos-control.component.html',
  styleUrls: ['./produtos-control.component.scss']
})
export class ProdutosControlComponent implements OnInit {

  public produtos: Array<Produto> = [];

  constructor(private produtosService: ProdutosService,
              private rota: Router) { }

  ngOnInit(): void {

    this.produtosService.getProdutos().subscribe( (produtosList: Produto[])=>{
      this.produtos = produtosList;
    }, (erro)=>{
        console.error('Erro getProdutos: ', erro);
    });

  }

  public deletar(id: number) {
    this.produtosService.deleteProduto(id).subscribe((resposta)=>{
      console.log('Deletar produto: ', resposta);

      this.produtosService.getProdutos().subscribe((produtosList: Produto[])=>{
        this.produtos = produtosList;
      });


    },
    (erro)=>{
      console.error('Erro ao deletar produto: ', erro);
    }
    );
  }

}
