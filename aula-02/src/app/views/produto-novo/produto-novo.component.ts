import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from './../../models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent implements OnInit {

  public produto: Produto = {
    id: 0,
    nome: "",
    preco: 0,
    validade: "",
    descricao: "",
    imgPath: ""
  };

  constructor(private router: Router, private produtoServico: ProdutosService) { }

  ngOnInit(): void {
  }

  public cadastrar() {

    console.log('Produto', this.produto);
    this.produtoServico.addProduto(this.produto);
    this.router.navigate(['/produtos']);
  }
}
