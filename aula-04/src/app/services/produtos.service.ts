import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Produto } from 'src/app/models/produto.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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

  public produtos: Array<Produto> = [ ];


  constructor(private httpCliente: HttpClient) {
  }

  public getAll(): Observable<Produto[]> {
    return this.httpCliente.get<Produto[]>(this.url).pipe(
      catchError( this.handleError )
    );
  }

  public getById(id: number): Observable<Produto> {
    return this.httpCliente.get<Produto>(this.url+'/'+id).pipe(
      catchError( this.handleError )
    );
  }

  public update(item: Produto): Observable<Produto> {
    return this.httpCliente.put<Produto>(this.url+'/'+item.id, item, httpOptions).pipe(
      catchError( this.handleError )
    )
  }

  public delete(id: number): Observable<any>  {
    return this.httpCliente.delete(this.url+'/'+id).pipe(
      catchError( this.handleError )
    );
  }

  public add(item: Produto): Observable<Produto> {
    item.imgPath = "./../../../assets/imagem/strawberry.jpg";
    return this.httpCliente.post<Produto>(this.url, item, httpOptions).pipe(
      catchError( this.handleError )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Ocorrência de um erro na aplicação do lado cliente ou um erro de rede
      console.error('Erro:', error.error.message);
    } else {
      // Erro na aplicação do lado servidor.
      console.error(
        `Erro no back-end ${error.status}, ` +
        `Estrutura do erro: ${error.error}`);
    }
    // Retorna um observable com uma mensagem de erro descritiva para o usuário
    return throwError(
      'Houve um erro, tente novamente mais tarde.');
  }

}
