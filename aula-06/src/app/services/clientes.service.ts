import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cliente } from 'src/app/models/cliente.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url: string = 'http://localhost:3000/clientes';

  public msgUpdateClientes = new EventEmitter<boolean>();


  constructor(private http: HttpClient) { }

  public getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  public add(cliente: Cliente): Observable<any> {
    return this.http.post(this.url, cliente, httpOptions);
  }

  public update(cliente: Cliente): Observable<any> {
    console.log(cliente.id);

    return this.http.put(`${this.url}/${cliente.id}`, cliente, httpOptions);
  }

  public getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.url+'/'+id);
  }

  public deletar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
