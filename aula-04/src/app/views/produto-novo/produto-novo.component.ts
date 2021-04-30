import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent implements OnInit {
  public produto: Produto;

  constructor(private rota: Router,
              private produtoServico: ProdutosService) {
    this.produto = new Produto();
  }

  ngOnInit(): void {
  }

  salvar() {
    console.log("produto", this.produto);

    this.produtoServico.add(this.produto).subscribe((produto: Produto)=>{
      console.log('Produto novo: ', produto);
      this.rota.navigate(['/produtos']);
    },
    (erro)=>{
      console.log('Erro de cadastro: ', erro);
    });

  }
}
