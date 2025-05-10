import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Client {
  id_user?: number;
  nomPrenom: string;
  age: number;
  tlf: string;
  email: string;
  role: 'livreur' | 'commercant' | 'client';
  motdepasse: string;
  adresse: string;
  code_postale: string;
  zip: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  // private apiUrl = 'http://localhost:8080/api/clients'; // adapte l'URL selon ton backend

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

