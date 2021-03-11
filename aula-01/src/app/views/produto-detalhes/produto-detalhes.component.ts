import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from './../../models/produto.model';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss']
})
export class ProdutoDetalhesComponent implements OnInit {
  public codigo: any;

  public produto: Produto = {
      id: 0,
      nome: "",
      preco: 0,
      validade: "",
      descricao: ""
  };


  public produtos = [
    {
      id: 1,
      nome: "Feijão",
      preco: 6,
      validade: "10/10/2021",
      descricao: "Feijão carioca do tipo 1"
    },
    {
      id: 2,
      nome: "Arroz",
      preco: 22,
      validade: "10/10/2021",
      descricao: "Arroz integral"
    },
    {
      id: 3,
      nome: "Sabão em pó",
      preco: 16,
      validade: "10/10/2021",
      descricao: "Indicado para lavagem de manchas"
    },
    {
      id: 4,
      nome: "Detergente",
      preco: 2.5,
      validade: "10/10/2021",
      descricao: "Usado para lavar louças"
    },
    {
      id: 5,
      nome: "Suco",
      preco: 2,
      validade: "10/10/2021",
      //descricao: "Suco com aromatizante artificial"
      descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit id eum, esse sint adipisci dolorem hic in, optio amet eius similique voluptatibus facilis ratione quas quibusdam aut quaerat eveniet aliquid."
    }
  ];

  constructor(private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number;
    this.codigo = this.rotaAtiva.snapshot.paramMap.get('id');
    id = Number(this.codigo);

    this.definirProduto(id);
  }

  public definirProduto(id: number) {
    for(let i=0; i<this.produtos.length; i++) {
      if (id === this.produtos[i].id) {
        this.produto.id = this.produtos[i].id;
        this.produto.nome = this.produtos[i].nome;
        this.produto.preco = this.produtos[i].preco;
        this.produto.descricao = this.produtos[i].descricao;
        this.produto.validade = this.produtos[i].validade;
        break;
      }
    }
  }
}
