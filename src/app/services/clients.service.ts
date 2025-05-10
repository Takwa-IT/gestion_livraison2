import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Client {
  id: number;
  client_name: string;
  adresse: string;
  code_postale: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  // apiUrl: any;

  // constructor(private http: HttpClient) { }

  // getAllClients(): Observable<Client[]> {
  //   return this.http.get<Client[]>(this.apiUrl);
  // }

  // getClientById(id: number): Observable<Client> {
  //   return this.http.get<Client>(`${this.apiUrl}/${id}`);
  // }

  // createClient(client: Client): Observable<Client> {
  //   return this.http.post<Client>(this.apiUrl, client);
  // }

  // updateClient(id: number, client: Client): Observable<Client> {
  //   return this.http.put<Client>(`${this.apiUrl}/${id}`, client);
  // }

  // deleteClient(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}

