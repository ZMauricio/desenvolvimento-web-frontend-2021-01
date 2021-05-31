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

  constructor(private router: Router,
              private rotaAtiva: ActivatedRoute,
              private produtoService: ProdutosService) {
  }

  ngOnInit(): void {
    let id: number;
    this.codigo = this.rotaAtiva.snapshot.paramMap.get('id');
    id = Number(this.codigo);

    this.produtoService.getProdutoById(id).subscribe(
      (resposta: Produto)=> {
       this.produto = resposta;
      }
    );
  }




  /*
  public deletar() {

    this.produtoService.deleteProduto(this.produto.id).subscribe(
      (resposta: Produto)=>{
        console.log('resposta', resposta);

        this.router.navigate(['/produtos']);
      }
    );

  }
  */

  public cancelar() {
    this.router.navigate(['/produtos-control']);
  }

  public editar(formulario: any) {
    console.log('produtoEdit', this.produto);

    console.log('formulario', formulario);

    this.produtoService.updateProduto(this.produto).subscribe((resposta: Produto)=>{
      console.log('resposta:', resposta);

      this.router.navigate(['/produtos-control']);
    });

  }
}
