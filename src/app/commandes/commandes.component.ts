import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Commande, CommandesService } from '../services/commandes.service';

@Component({
  selector: 'app-commandes',
  imports: [RouterLink],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css'
})
export class CommandesComponent {
  // commandes: Commande[] = [];
  // searchQuery: string = '';
  // isSearchActive: boolean = false;

  // constructor(
  //   private commandeService: CommandesService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.loadCommandes();
  // }

  // loadCommandes(): void {
  //   this.commandeService.getAllCommandes().subscribe({
  //     next: (data) => this.commandes = data,
  //     error: (err) => console.error('Erreur chargement commandes:', err)
  //   });
  // }

  // addCommande(): void {
  //   Swal.fire({
  //     title: 'Ajouter une Commande',
  //     html:
  //       `<input id="adresse" class="swal2-input" placeholder="Adresse">` +
  //       `<input id="code_postale" class="swal2-input" placeholder="Code Postal">` +
  //       `<input id="zip" class="swal2-input" placeholder="Zip">` +
  //       `<input id="tlf" class="swal2-input" placeholder="Téléphone">` +
  //       `<input id="statut" class="swal2-input" placeholder="Statut (en_attente/livré/annulé)">` +
  //       `<input id="date_cmd" class="swal2-input" type="date">` +
  //       `<input id="id_prod" class="swal2-input" placeholder="Produit">` +
  //       `<input id="quantity" class="swal2-input" placeholder="Quantité">` +
  //       `<input id="prix_unitaire" class="swal2-input" placeholder="Prix Unitaire">`,

  //     confirmButtonText: 'Ajouter',
  //     confirmButtonColor: '#228B22',
  //     preConfirm: () => {
  //       const get = (id: string) => (document.getElementById(id) as HTMLInputElement).value;
  //       const data: Commande = {
  //         adresse: get('adresse'),
  //         code_postale: get('code_postale'),
  //         zip: get('zip'),
  //         statut: get('statut') as 'en_attente' | 'livré' | 'annulé',
  //         date_cmd: new Date(get('date_cmd')),
  //         estpayee: false,
  //         id_prod: +get('id_prod'),
  //         quantity: +get('quantity'),
  //         prix_unitaire: +get('prix_unitaire'),
  //         prixht: 0,
  //         prix_totale: 0,
  //         tlf: get('tlf'),
  //       };

  //       if (!data.adresse || !data.tlf || isNaN(data.id_prod) || isNaN(data.quantity)) {
  //         Swal.showValidationMessage('Champs manquants ou invalides');
  //         return false;
  //       }

  //       data.prixht = data.quantity * data.prix_unitaire;
  //       data.prix_totale = data.prixht * 1.19; // exemple TVA

  //       return data;
  //     }
  //   }).then((result) => {
  //     if (result.isConfirmed && result.value) {
  //       this.commandeService.createCommande(result.value).subscribe({
  //         next: (newCmd) => {
  //           this.commandes.push(newCmd);
  //           Swal.fire('Succès !', 'Commande ajoutée.', 'success');
  //         },
  //         error: () => Swal.fire('Erreur', 'Ajout échoué.', 'error')
  //       });
  //     }
  //   });
  // }
  // editCommande(cmd: Commande): void {
  //   Swal.fire({
  //     title: 'Modifier la Commande',
  //     html:
  //       `<input id="adresse" class="swal2-input" placeholder="Adresse" value="${cmd.adresse}">` +
  //       `<input id="code_postale" class="swal2-input" placeholder="Code Postal" value="${cmd.code_postale}">` +
  //       `<input id="zip" class="swal2-input" placeholder="Zip" value="${cmd.zip}">` +
  //       `<input id="tlf" class="swal2-input" placeholder="Téléphone" value="${cmd.tlf}">` +
  //       `<select id="statut" class="swal2-input">
  //          <option value="en_attente" ${cmd.statut === 'en_attente' ? 'selected' : ''}>En attente</option>
  //          <option value="livré" ${cmd.statut === 'livré' ? 'selected' : ''}>Livré</option>
  //          <option value="annulé" ${cmd.statut === 'annulé' ? 'selected' : ''}>Annulé</option>
  //        </select>` +
  //       `<input id="date_cmd" class="swal2-input" type="date" value="${cmd.date_cmd.toString().split('T')[0]}">` +
  //       `<input id="id_prod" class="swal2-input" placeholder="ID Produit" value="${cmd.id_prod}">` +
  //       `<input id="quantity" class="swal2-input" placeholder="Quantité" value="${cmd.quantity}">` +
  //       `<input id="prix_unitaire" class="swal2-input" placeholder="Prix Unitaire" value="${cmd.prix_unitaire}">`,
  //     confirmButtonText: 'Enregistrer',
  //     confirmButtonColor: '#1E90FF',
  //     preConfirm: () => {
  //       const get = (id: string) => (document.getElementById(id) as HTMLInputElement).value;
  //       const updated: Commande = {
  //         ...cmd,
  //         adresse: get('adresse'),
  //         code_postale: get('code_postale'),
  //         zip: get('zip'),
  //         tlf: get('tlf'),
  //         statut: get('statut') as 'en_attente' | 'livré' | 'annulé',
  //         date_cmd: new Date(get('date_cmd')),
  //         id_prod: +get('id_prod'),
  //         quantity: +get('quantity'),
  //         prix_unitaire: +get('prix_unitaire'),
  //       };

  //       updated.prixht = updated.quantity * updated.prix_unitaire;
  //       updated.prix_totale = updated.prixht * 1.19;

  //       return updated;
  //     }
  //   }).then(result => {
  //     if (result.isConfirmed && result.value) {
  //       this.commandeService.updateCommande(result.value).subscribe({
  //         next: () => {
  //           const index = this.commandes.findIndex(c => c.id_cmd === result.value.id_cmd);
  //           if (index !== -1) this.commandes[index] = result.value;
  //           Swal.fire('Succès', 'Commande mise à jour.', 'success');
  //         },
  //         error: () => Swal.fire('Erreur', 'Échec de la mise à jour.', 'error')
  //       });
  //     }
  //   });
  // }

  // deleteCommande(cmd: Commande): void {
  //   Swal.fire({
  //     title: 'Supprimer la commande ?',
  //     text: `ID: ${cmd.id_cmd}`,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#d33',
  //     cancelButtonText: 'Annuler',
  //     confirmButtonText: 'Oui, supprimer'
  //   }).then((result) => {
  //     if (result.isConfirmed && cmd.id_cmd) {
  //       this.commandeService.deleteCommande(cmd.id_cmd).subscribe({
  //         next: () => {
  //           this.commandes = this.commandes.filter(c => c.id_cmd !== cmd.id_cmd);
  //           Swal.fire('Supprimée', 'Commande supprimée.', 'success');
  //         },
  //         error: () => Swal.fire('Erreur', 'Suppression échouée.', 'error')
  //       });
  //     }
  //   });
  // }

  // searchCommande(): void {
  //   if (!this.searchQuery) {
  //     this.loadCommandes();
  //     this.isSearchActive = false;
  //     return;
  //   }

  //   const query = this.searchQuery.toLowerCase();
  //   this.commandes = this.commandes.filter(c =>
  //     c.adresse.toLowerCase().includes(query) ||
  //     c.tlf.toLowerCase().includes(query) ||
  //     c.statut.toLowerCase().includes(query)
  //   );
  //   this.isSearchActive = true;
  // }

  // onSearchKeydown(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.searchCommande();
  //   }
  // }
}
