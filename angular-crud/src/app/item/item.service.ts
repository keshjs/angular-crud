import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.module';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private baseURL = 'http://localhost:3000';
  private endpoint = 'itens';

  constructor(private httpClient: HttpClient) {}
  listar(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this.baseURL}/${this.endpoint}`);
  }

  pesquisarPorId(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  cadastrar(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(`${this.baseURL}/${this.endpoint}`, item);
  }

  atualizar(item: Item): Observable<Item> {
    return this.httpClient.put<Item>(
      `${this.baseURL}/${this.endpoint}/${item.id}`,
      item
    );
  }

  deletar(item: Item): Observable<{}> {
    return this.httpClient.delete(
      `${this.baseURL}/${this.endpoint}/${item.id}`
    );
  }
}
