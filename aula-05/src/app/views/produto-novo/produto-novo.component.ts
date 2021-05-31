import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Produto } from './../../models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent implements OnInit {
  public produtoForm: FormGroup;

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

  public situacaoList: any[] = [
    {
      id: 1,
      nome: 'promoção',
      value: 'promocao',
      checked: false
    },
    {
      id: 2,
      nome: 'queima estoque',
      value: 'queima',
      checked: false
    },
    {
      id: 3,
      nome: 'descontos com limite',
      value: 'descontos',
      checked: false
    }
  ];

  constructor(private router: Router,
              private produtoServico: ProdutosService,
              private formBuilder: FormBuilder) {

                this.produtoForm = this.formBuilder.group(
                  {
                    nome: ['',  Validators.compose([
                      Validators.required, Validators.minLength(3), Validators.maxLength(100)
                    ])],
                    preco: ['0', Validators.compose([
                      Validators.required, Validators.min(0)
                    ]) ],
                    validade: ['', Validators.required],
                    descricao: ['', Validators.compose([
                      Validators.required, Validators.maxLength(500)
                    ])],
                    perecivel: ['', Validators.required],
                    situacao: this.formBuilder.array( [ ], Validators.required )
                  }
                );

                this.onLoadCheckBoxStatus();
  }

  ngOnInit(): void {
    /*
    this.produtoForm = this.formBuilder.group(
      {
        nome: ['',  Validators.compose([
          Validators.required, Validators.minLength(3), Validators.maxLength(100)
        ])],
        preco: ['0', Validators.compose([
          Validators.required, Validators.min(0)
        ]) ],
        validade: ['', Validators.required],
        descricao: ['', Validators.compose([
          Validators.required, Validators.maxLength(500)
        ])],
        perecivel: ['s', Validators.required]
      }
    );
    */
  }


  public onSelectionChange(evento: any, indice: number) {
    const situacaoAtual: FormArray = this.produtoForm.get('situacao') as FormArray;

    this.situacaoList[indice].checked = evento.target.checked;

    this.updateCheckControl(situacaoAtual, evento.target);
  }

  public updateCheckControl(situacao: FormArray, evento: any) {

    if (evento.checked) {
      situacao.push(new FormControl(evento.value));
    } else {

      situacao.controls.forEach( (item, index: number) => {

        if (item instanceof FormControl) {
          if (item.value == evento.value) {
            situacao.removeAt(index);
            return;
          }
        }

      });
    }
  }


  public onLoadCheckBoxStatus() {
    const checkBoxArrayList: FormArray = this.produtoForm.get('situacao') as FormArray;

    this.situacaoList.forEach((item)=>{
      this.updateCheckControl(checkBoxArrayList, item);
    });

  }

  public cadastrar() {

    // console.log('Produto', this.produto);
    console.log(this.produtoForm.value);

    if (!this.produtoForm.valid && this.produtoForm.pending) {
      return ;
    }

    this.produto = {
      id: 0,
      nome: this.produtoForm.value.nome,
      preco: this.produtoForm.value.preco,
      validade: this.produtoForm.value.validade,
      descricao: this.produtoForm.value.descricao,
      imgPath: '',
      perecivel: this.produtoForm.value.perecivel,
      descontos: this.produtoForm.value.situacao
    };

    console.log(this.produto);


    this.produtoServico.addProduto(this.produto).subscribe( (resposta)=> {
      console.log('resposta: ', resposta);
      this.router.navigate(['/produtos-control']);
    });

  }
}
