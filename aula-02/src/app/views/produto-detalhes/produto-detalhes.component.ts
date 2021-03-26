import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Produto } from './../../models/produto.model';

import { ProdutosService } from './../../services/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss']
})
export class ProdutoDetalhesComponent implements OnInit {
  public codigo: any;
  public habilitarEdicao: boolean = false;

  public produto: Produto = {
      id: 0,
      nome: "",
      preco: 0,
      validade: "",
      descricao: "",
      imgPath: ""
  };


  public produtoEdit: Produto = {
    id: 0,
    nome: "",
    preco: 0,
    validade: "",
    descricao: "",
    imgPath: ""
};

  constructor(private router: Router,
              private rotaAtiva: ActivatedRoute,
              private produtoService: ProdutosService) {
  }

  ngOnInit(): void {
    let id: number;
    this.codigo = this.rotaAtiva.snapshot.paramMap.get('id');
    id = Number(this.codigo);

    this.produto = this.produtoService.getProdutoById(id);
  }

  public deletar() {
    this.produtoService.deleteProduto(this.produto.id);
    this.router.navigate(['/produtos']);
  }

  public habilitar() {
    this.produtoEdit.id = this.produto.id;
    this.produtoEdit.nome = this.produto.nome;
    this.produtoEdit.preco = this.produto.preco;
    this.produtoEdit.validade = this.produto.validade;
    this.produtoEdit.descricao = this.produto.descricao;
    this.produtoEdit.imgPath = this.produto.imgPath;

    this.habilitarEdicao = true;
  }

  public cancelar() {
    this.habilitarEdicao = false;
  }

  public editar() {
    console.log('produtoEdit', this.produtoEdit);

    this.produtoService.updateProduto(this.produtoEdit);
    this.router.navigate(['/produtos']);
  }
}
