import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Commercant {
  id?: number;
  nomPrenom: string;
  role: string;
  motDePasse: string;
  email: string;
  adresse: string;
  age: number;
  telephone: string;
  codePostale: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommercantsService {

  private apiUrl = 'http://localhost:8080/api/commercants';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Commercant[]> {
    return this.http.get<Commercant[]>(this.apiUrl);
  }

  add(commercant: Commercant): Observable<Commercant> {
    return this.http.post<Commercant>(this.apiUrl, commercant);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}