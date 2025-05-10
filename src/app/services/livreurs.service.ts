import { Injectable } from '@angular/core';

export interface Livreur {
  id_user?: number;
  nomPrenom: string;
  motDePasse: string;
  email: string;
  age: number;
  tarif_livraison: number;
  tarif_retour: number;
  telephone: string;
  role: 'livreur' | 'commercant' | 'client';
}

@Injectable({
  providedIn: 'root'
})
export class LivreursService {

  // private apiUrl = 'http://localhost:8080/api/livreurs'; // adapte l'URL selon ton backend

  // constructor(private http: HttpClient) { }

  // getAllLivreurs(): Observable<Livreur[]> {
  //   return this.http.get<Livreur[]>(this.apiUrl);
  // }

  // getLivreurById(id: number): Observable<Livreur> {
  //   return this.http.get<Livreur>(`${this.apiUrl}/${id}`);
  // }

  // createLivreur(livreur: Livreur): Observable<Livreur> {
  //   return this.http.post<Livreur>(this.apiUrl, livreur);
  // }

  // updateLivreur(id: number, livreur: Livreur): Observable<Livreur> {
  //   return this.http.put<Livreur>(`${this.apiUrl}/${id}`, livreur);
  // }

  // deleteLivreur(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
