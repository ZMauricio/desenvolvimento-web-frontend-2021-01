import { Injectable } from '@angular/core';

import { Produto } from 'src/app/models/produto.model';
/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class ProdutosService {


  public produto: Produto = {
    id: 0,
    nome: "",
    preco: 0,
    validade: "",
    descricao: "",
    imgPath: ""
  };


  public produtos: Produto[] = [
    {
      id: 1,
      nome: "Feijão",
      preco: 6,
      validade: "2021-10-01",
      descricao: "Feijão carioca do tipo 1",
      imgPath: "./../../../assets/imagem/beans.jpg"
    },
    {
      id: 2,
      nome: "Arroz",
      preco: 22,
      validade: "2021-10-01",
      descricao: "Arroz integral",
      imgPath: "./../../../assets/imagem/rice.jpg"
    },
    {
      id: 3,
      nome: "Cake",
      preco: 16,
      validade: "2021-10-01",
      descricao: "Produto da padaria",
      imgPath: "./../../../assets/imagem/cake.jpg"
    },
    {
      id: 4,
      nome: "Morango",
      preco: 2.5,
      validade: "2021-10-01",
      descricao: "Morangos orgânicos",
      imgPath: "./../../../assets/imagem/strawberry.jpg"
    },
    {
      id: 5,
      nome: "Suco",
      preco: 2,
      validade: "2021-10-01",
      descricao: "Suco natural",
      imgPath: "./../../../assets/imagem/juice.jpg"
    }
  ];


  constructor() { }

  public getProdutos(): Produto[] {
    return this.produtos;
  }

  public getProdutoById(id: number): Produto {
    for(let item of this.produtos) {
      if (id === item.id) {
        return item;
      }
    }

    return this.produto;
  }

  public addProduto(item: Produto) {
    const id: number = this.produtos.length;
    item.id = id;
    item.imgPath = "./../../../assets/imagem/beans.jpg";

    this.produtos.push(item);
  }

  public deleteProduto(id: number) {
    let pos = null;
    for(let i=0; i<this.produtos.length; i++) {
      if (id === this.produtos[i].id) {
        pos = i;

        console.log(this.produtos[i]);

        break;
      }
    }

    if (pos || (pos === 0) ) {
      console.log('pos', pos);
      this.produtos.splice(pos, 1);
    }
  }

  public updateProduto(item: Produto) {
    for(let obj of this.produtos) {
      if (item.id === obj.id) {
        obj.nome = item.nome;
        obj.preco = item.preco;
        obj.validade = item.validade;
        obj.descricao = item.descricao;
        obj.imgPath = item.imgPath;
        break;
      }
    }
  }
}
