import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Commercant {
  id_user?: number;
  nomPrenom: string;
  motDePasse: string;
  email: string;
  age: number;
  telephone: string;
  role: 'livreur' | 'commercant' | 'client';
}

@Injectable({
  providedIn: 'root'
})
export class CommercantsService {
  // private apiUrl = 'http://localhost:8080/api/commercants'; // adapte l'URL selon ton backend

  // constructor(private http: HttpClient) { }

  // getAllCommercants(): Observable<Commercant[]> {
  //   return this.http.get<Commercant[]>(this.apiUrl);
  // }

  // getCommercantById(id: number): Observable<Commercant> {
  //   return this.http.get<Commercant>(`${this.apiUrl}/${id}`);
  // }

  // createCommercant(commercant: Commercant): Observable<Commercant> {
  //   return this.http.post<Commercant>(this.apiUrl, commercant);
  // }

  // updateCommercant(id: number, commercant: Commercant): Observable<Commercant> {
  //   return this.http.put<Commercant>(`${this.apiUrl}/${id}`, commercant);
  // }

  // deleteCommercant(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }

}