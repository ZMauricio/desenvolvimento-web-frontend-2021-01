import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string = 'http://localhost:3000/usuarios';

  constructor(private httpCliente: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(this.url);
  }

  getById(id: number): Observable<Usuario> {
    return this.httpCliente.get<Usuario>(`this.url/${id}`);
  }

  getByName(nome: string) {
    return this.httpCliente.get(`${this.url}?nome=${nome}`);
  }

  getByEmailPassword(usuario: Usuario): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(`${this.url}?email=${usuario.email}&senha=${usuario.senha}`);
  }

  add(usuario: Usuario) {
    return this.httpCliente.post<Usuario>(this.url, usuario, httpOptions);
  }

  update(usuario: Usuario) {
    return this.httpCliente.put(`this.url/${usuario.id}`, usuario, httpOptions);
  }

  delete(id: number) {
    return this.httpCliente.delete(`this.url/${id}`);
  }
}
