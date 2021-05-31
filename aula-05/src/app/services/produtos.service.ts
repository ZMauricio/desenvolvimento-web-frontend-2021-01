import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Produto } from 'src/app/models/produto.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class ProdutosService {
  private url: string = 'http://localhost:3000/produtos';

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

  public produtos: Produto[] = [];

  constructor(private httpCliente: HttpClient) { }

  public getProdutos(): Observable<Produto[]> {
    return this.httpCliente.get<Produto[]>(this.url);
  }

  public getProdutoById(id: number): Observable<Produto> {
   return this.httpCliente.get<Produto>(this.url+'/'+id);
  }

  public addProduto(item: Produto): Observable<any> {
    item.imgPath = "./../../../assets/imagem/beans.jpg";
    return this.httpCliente.post<Produto>(this.url, item, httpOptions);
  }

  public updateProduto(item: Produto): Observable<any> {
    const produtoUpdate = {
      nome: item.nome,
      preco: item.preco,
      validade: item.validade,
      descricao: item.descricao,
      imgPath: item.imgPath
    };

    return this.httpCliente.put<Produto>(this.url+'/'+item.id, produtoUpdate, httpOptions)
  }

  public deleteProduto(id: number): Observable<Produto> {
    return this.httpCliente.delete<Produto>(this.url+'/'+id);
  }
}
