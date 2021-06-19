import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produto-info',
  templateUrl: './produto-info.component.html',
  styleUrls: ['./produto-info.component.scss']
})
export class ProdutoInfoComponent implements OnInit {

  public produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    validade: '',
    descricao: '',
    imgPath: '',
    perecivel: '',
    descontos: []
  };

  constructor(private produtosService: ProdutosService,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number( this.rotaAtiva.snapshot.paramMap.get('id') );

    this.produtosService.getProdutoById(id).subscribe( (produto: Produto)=>{
      this.produto = produto;

    },
    (erro)=>{
      console.error('Erro ao carregar informações do produto', erro);
    }
    );

  }

}
