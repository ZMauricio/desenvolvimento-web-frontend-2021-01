import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Usuario } from '../models/usuario.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string = 'http://localhost:3000/usuarios';

  constructor(private httpCliente: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(`${this.url}`).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<Usuario> {
    return this.httpCliente.get<Usuario>(`${this.url}/id`).pipe(
      catchError(this.handleError)
    );
  }

  getByEmailPassword(usuario: Usuario): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(this.url+`?email=${usuario.email}&senha=${usuario.senha}`).pipe(
      catchError(this.handleError)
    );
  }

  add(usuario: Usuario) {
    return this.httpCliente.post<Usuario>(this.url, usuario, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  update(usuario: Usuario) {
    return this.httpCliente.put(`${this.url}/${usuario.id}`, usuario, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number) {
    return this.httpCliente.delete(`${this.url}/id`).pipe(
      catchError(this.handleError)
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
