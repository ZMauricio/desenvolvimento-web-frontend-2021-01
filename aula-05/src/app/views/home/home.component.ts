import { Component, OnInit } from '@angular/core';

import { Produto } from './../../models/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // this.item = new Produto("Feijão", 7.0, "feijão carioca");
  }

}
