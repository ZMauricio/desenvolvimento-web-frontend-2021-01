import { Component, OnInit } from '@angular/core';


// import { ProdutosService } from 'src/app/services/produtos.service';
// import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  // public produtos: Produto[] = [];

  // constructor(private produtosService: ProdutosService) { }
  constructor() { }

  ngOnInit(): void {

  }

}
