import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

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
      descricao: "Suco com aromatizante artificial"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
