import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss']
})
export class ProdutoDetalhesComponent implements OnInit {
  public produto: Produto;

  constructor(private rota: Router,
              private rotaAtiva: ActivatedRoute,
              private produtoService: ProdutosService) {

    this.produto = new Produto();
  }

  ngOnInit(): void {
   let codigo: number = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
   console.log('codigo', codigo);

   this.produtoService.getById(codigo).subscribe((produto: Produto)=>{
      this.produto = produto;
    },
    (erro)=>{
      console.log('Erro ao buscar por id: ', erro);
    });
  }


  public deletar() {
    console.log("produto", this.produto);

    this.produtoService.delete(this.produto.id).subscribe( (resposta)=>{
      console.log('Deletar: ', resposta);
      this.rota.navigate(['/produtos']);
    },
    (erro)=>{
      console.log('Erro ao deletar: ', erro);
    });

  }

  public editar() {
    this.produtoService.update(this.produto).subscribe((produto: Produto)=>{
      console.log('Editar produto: ', produto);
      this.rota.navigate(['/produtos']);
    },
    (erro)=>{
      console.log('Erro ao editar: ', erro);
    });
  }
}
