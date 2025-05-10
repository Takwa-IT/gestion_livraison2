import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Commande {
  id_cmd?: number; // Optionnel car auto-généré
  adresse: string;
  code_postale: string;
  zip: string;
  statut: 'en_attente' | 'livré' | 'annulé';
  date_cmd: Date;
  estpayee: boolean;
  id_prod: number;
  quantity: number;
  prixht: number;
  prix_unitaire: number;
  prix_totale: number;
  tlf: string;
}


@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  // private apiUrl = 'http://localhost:8080/api/commandes'; // adapte l’URL selon ton backend

  // constructor(private http: HttpClient) { }

  // getAllCommandes(): Observable<Commande[]> {
  //   return this.http.get<Commande[]>(this.apiUrl);
  // }

  // getCommandeById(id: number): Observable<Commande> {
  //   return this.http.get<Commande>(`${this.apiUrl}/${id}`);
  // }

  // createCommande(commande: Commande): Observable<Commande> {
  //   return this.http.post<Commande>(this.apiUrl, commande);
  // }

  // updateCommande(id: number, commande: Commande): Observable<Commande> {
  //   return this.http.put<Commande>(`${this.apiUrl}/${id}`, commande);
  // }

  // deleteCommande(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
