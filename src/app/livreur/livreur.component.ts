import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { LivreursService, Livreur } from '../services/livreurs.service';

@Component({
  selector: 'app-livreur',
  imports: [CommonModule, RouterLink],
  templateUrl: './livreur.component.html',
  styleUrl: './livreur.component.css'
})
export class LivreurComponent {

  // livreurs: Livreur[] = [];
  // searchQuery: string = '';
  // isSearchActive: boolean = false;

  // constructor(
  //   private livreurService: LivreurService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.loadLivreurs();
  // }

  // loadLivreurs(): void {
  //   this.livreurService.getAllLivreurs().subscribe({
  //     next: (data) => this.livreurs = data,
  //     error: (err) => console.error('Erreur chargement livreurs:', err)
  //   });
  // }

  // addLivreur(): void {
  //   Swal.fire({
  //     title: 'Ajouter un Livreur',
  //     html:
  //        '<input id="swal-input1" class="swal2-input" placeholder="Nom">' +
  //         '<input id="swal-input2" class="swal2-input" placeholder="Role">' +
  //         '<input id="swal-input3" class="swal2-input" placeholder="Mot de Passe">' +
  //         '<input id="swal-input4" class="swal2-input" placeholder="Email">' +
  //         '<input id="swal-input5" class="swal2-input" placeholder="Âge">' +
  //         '<input id="swal-input6" class="swal2-input" placeholder="Téléphone">' +
  //       '<input id="swal-input7" class="swal2-input" placeholder="Tarif Livraison">' +
  //         '<input id="swal-input8" class="swal2-input" placeholder="Tarif Retour">',
  //     confirmButtonText: 'Ajouter',
  //     confirmButtonColor: '#228B22',
  //     preConfirm: () => {
  //       const nom = (document.getElementById('swal-input1') as HTMLInputElement).value;
  //         const role = (document.getElementById('swal-input2') as HTMLInputElement).value;
  //         const mdp = (document.getElementById('swal-input3') as HTMLInputElement).value;
  //         const email = (document.getElementById('swal-input4') as HTMLInputElement).value;
  //         const age = (document.getElementById('swal-input5') as HTMLInputElement).value;
  //         const tlf = (document.getElementById('swal-input6') as HTMLInputElement).value;
  //         const tarif_livraison = (document.getElementById('swal-input7') as HTMLInputElement).value;
  //         const tarif_retour = (document.getElementById('swal-input8') as HTMLInputElement).value;

  //       if (!nom || !role || !age || !email || !mdp || !tlf || isNaN(tarif_livraison) || isNaN(tarif_retour)) {
  //         Swal.showValidationMessage('Veuillez remplir tous les champs correctement');
  //         return false;
  //       }

  //       return {
  //         nom,
  //         age,
  //         email,
  //         mdp,
  //         tlf,
  //         role: 'livreur',
  //         tarif_livraison,
  //         tarif_retour
  //       };
  //     }
  //   }).then((result) => {
  //     if (result.isConfirmed && result.value) {
  //       this.livreurService.createLivreur(result.value).subscribe({
  //         next: (newLivreur) => {
  //           this.livreurs.push(newLivreur);
  //           Swal.fire('Succès !', 'Livreur ajouté.', 'success');
  //         },
  //         error: () => Swal.fire('Erreur', 'Ajout échoué.', 'error')
  //       });
  //     }
  //   });
  // }

  // editLivreur(livreur: Livreur): void {
  //   Swal.fire({
  //     title: 'Modifier le Livreur',
  //     html:
  //      '<input id="swal-input1" class="swal2-input" placeholder="Nom">' +
  //         '<input id="swal-input2" class="swal2-input" placeholder="Role">' +
  //         '<input id="swal-input3" class="swal2-input" placeholder="Mot de Passe">' +
  //         '<input id="swal-input4" class="swal2-input" placeholder="Email">' +
  //         '<input id="swal-input5" class="swal2-input" placeholder="Âge">' +
  //         '<input id="swal-input6" class="swal2-input" placeholder="Téléphone">' +
  //       '<input id="swal-input7" class="swal2-input" placeholder="Tarif Livraison">' +
  //         '<input id="swal-input8" class="swal2-input" placeholder="Tarif Retour">',
  //     confirmButtonText: 'Sauvegarder',
  //     confirmButtonColor: '#228B22',
  //     preConfirm: () => {
  //       const nom = (document.getElementById('swal-input1') as HTMLInputElement).value;
  //         const role = (document.getElementById('swal-input2') as HTMLInputElement).value;
  //         const mdp = (document.getElementById('swal-input3') as HTMLInputElement).value;
  //         const email = (document.getElementById('swal-input4') as HTMLInputElement).value;
  //         const age = (document.getElementById('swal-input5') as HTMLInputElement).value;
  //         const tlf = (document.getElementById('swal-input6') as HTMLInputElement).value;
  //         const tarif_livraison = (document.getElementById('swal-input7') as HTMLInputElement).value;
  //         const tarif_retour = (document.getElementById('swal-input8') as HTMLInputElement).value;

  //       if (!nom || !role || !age || !email || !mdp || !tlf || isNaN(tarif_livraison) || isNaN(tarif_retour)) {
  //         Swal.showValidationMessage('Tous les champs sont requis');
  //         return false;
  //       }

  //       return {
  //         ...livreur,
  //         nom,
  //         age,
  //         email,
  //         mdp: mdp || livreur.mdp,
  //         tlf,
  //         tarif_livraison,
  //         tarif_retour,
  //         role: 'livreur'
  //       };
  //     }
  //   }).then((result) => {
  //     if (result.isConfirmed && result.value) {
  //       this.livreurService.updateLivreur(livreur.id_user!, result.value).subscribe({
  //         next: (updated) => {
  //           const i = this.livreurs.findIndex(l => l.id_user === updated.id_user);
  //           if (i !== -1) this.livreurs[i] = updated;
  //           Swal.fire('Modifié !', 'Livreur mis à jour.', 'success');
  //         },
  //         error: () => Swal.fire('Erreur', 'Mise à jour échouée.', 'error')
  //       });
  //     }
  //   });
  // }

  // deleteLivreur(livreur: Livreur): void {
  //   Swal.fire({
  //     title: 'Supprimer ce livreur ?',
  //     text: `Voulez-vous vraiment supprimer ${livreur.nom} ${livreur.prenom} ?`,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#d33',
  //     cancelButtonText: 'Annuler',
  //     confirmButtonText: 'Oui, supprimer'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.livreurService.deleteLivreur(livreur.id_user!).subscribe({
  //         next: () => {
  //           this.livreurs = this.livreurs.filter(l => l.id_user !== livreur.id_user);
  //           Swal.fire('Supprimé !', 'Livreur supprimé.', 'success');
  //         },
  //         error: () => Swal.fire('Erreur', 'Suppression échouée.', 'error')
  //       });
  //     }
  //   });
  //    }
  // searchLivreur(): void {
  //   if (!this.searchQuery) {
  //     this.loadLivreurs();
  //     this.isSearchActive = false;
  //     return;
  //   }

  //   const query = this.searchQuery.toLowerCase();
  //   this.livreurs = this.livreurs.filter(l =>
  //     l.nom.toLowerCase().includes(query) ||
  //     l.age.toLowerCase().includes(query) ||
  //     l.email.toLowerCase().includes(query) ||
  //     l.role.toLowerCase().includes(query) ||
  //     l.mdp.toLowerCase().includes(query) ||
  //     l.tarif_livraison.toLowerCase().includes(query) ||
  //     l.tarif_livreur.toLowerCase().includes(query) ||
  //     l.tlf.toLowerCase().includes(query)
  //   );
  //   this.isSearchActive = true;
  // }

  // onSearchKeydown(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.searchLivreur();
  //   }
  // }
}