import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Commercant, CommercantsService } from '../services/commercants.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-commercant',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './commercant.component.html',
  styleUrl: './commercant.component.css'
})
export class CommercantComponent {

  //   commercants: Commercant[] = [];
  //   searchQuery: string = '';
  //   isSearchActive: boolean = false;

  //   constructor(
  //     private commercantService: CommercantService,
  //     private router: Router
  //   ) {}

  //   ngOnInit(): void {
  //     this.loadCommercants();
  //   }

  //   loadCommercants(): void {
  //     this.commercantService.getAllCommercants().subscribe({
  //       next: (data) => (this.commercants = data),
  //       error: (err) => console.error('Erreur chargement commercants:', err)
  //     });
  //   }

  //   addCommercant(): void {
  //     Swal.fire({
  //       title: 'Ajouter un Commerçant',
  //       html:
  //         '<input id="swal-input1" class="swal2-input" placeholder="Nom">' +
  //         '<input id="swal-input3" class="swal2-input" placeholder="Rôle">' +
  //         '<input id="swal-input4" class="swal2-input" placeholder="Mot de Passe">' +
  //         '<input id="swal-input5" class="swal2-input" placeholder="Email">' +
  //         '<input id="swal-input6" class="swal2-input" placeholder="Âge">' +
  //         '<input id="swal-input7" class="swal2-input" placeholder="Téléphone">' 
  //       focusConfirm: false,
  //       confirmButtonText: 'Ajouter',
  //       confirmButtonColor: '#228B22',
  //       preConfirm: () => {
  //         const nom = (document.getElementById('swal-input1') as HTMLInputElement).value;
  //         const role = (document.getElementById('swal-input2') as HTMLInputElement).value;
  //         const mdp = (document.getElementById('swal-input3') as HTMLInputElement).value;
  //         const email = (document.getElementById('swal-input4') as HTMLInputElement).value;
  //         const age = (document.getElementById('swal-input5') as HTMLInputElement).value;
  //         const tlf = (document.getElementById('swal-input6') as HTMLInputElement).value;

  //         if (!nom  || !age || !tlf || !email || !mdp   || !role) {
  //           Swal.showValidationMessage('Veuillez remplir tous les champs');
  //           return false;
  //         }

  //         return { nom, age, tlf, email, mdp, role: 'Commercant' };
  //       }
  //     }).then((result) => {
  //       if (result.isConfirmed && result.value) {
  //         this.commercantService.createCommercant(result.value).subscribe({
  //           next: (newCommercant) => {
  //             this.commercants.push(newCommercant);
  //             Swal.fire('Succès !', 'Commerçant ajouté.', 'success');
  //           },
  //           error: () => Swal.fire('Erreur', 'Ajout échoué.', 'error')
  //         });
  //       }
  //     });
  //   }

  //   editCommercant(commercant: Commercant): void {
  //     Swal.fire({
  //       title: 'Modifier le Commerçant',
  //       html:
  //        '<input id="swal-input1" class="swal2-input" placeholder="Nom">' +
  //         '<input id="swal-input3" class="swal2-input" placeholder="Rôle">' +
  //         '<input id="swal-input4" class="swal2-input" placeholder="Mot de Passe">' +
  //         '<input id="swal-input5" class="swal2-input" placeholder="Email">' +
  //         '<input id="swal-input6" class="swal2-input" placeholder="Âge">' +
  //         '<input id="swal-input7" class="swal2-input" placeholder="Téléphone">' 
  //       confirmButtonText: 'Sauvegarder',
  //       confirmButtonColor: '#228B22',
  //       preConfirm: () => {
  //         const nom = (document.getElementById('swal-input1') as HTMLInputElement).value;
  //         const role = (document.getElementById('swal-input2') as HTMLInputElement).value;
  //         const mdp = (document.getElementById('swal-input3') as HTMLInputElement).value;
  //         const email = (document.getElementById('swal-input4') as HTMLInputElement).value;
  //         const age = (document.getElementById('swal-input5') as HTMLInputElement).value;
  //         const tlf = (document.getElementById('swal-input6') as HTMLInputElement).value;


  //         if (!nom  || !age || !tlf || !email || !mdp   || !role) {
  //           Swal.showValidationMessage('Tous les champs sont requis');
  //           return false;
  //         }

  //         return {
  //           id_user: commercant.id_user,
  //           nom,
  //           age,
  //           tlf,
  //           email,
  //           mdp,
  //           code_postale,
  //           role: 'commercant'
  //         };
  //       }
  //     }).then((result) => {
  //       if (result.isConfirmed && result.value) {
  //         this.commercantService.updateCommercant(commercant.id_user!, result.value).subscribe({
  //           next: (updated) => {
  //             const i = this.commercants.findIndex(c => c.id_user === updated.id_user);
  //             if (i !== -1) this.commercants[i] = updated;
  //             Swal.fire('Modifié !', 'Commerçant mis à jour.', 'success');
  //           },
  //           error: () => Swal.fire('Erreur', 'Échec de la mise à jour.', 'error')
  //         });
  //       }
  //     });
  //   }

  //   deleteCommercant(commercant: Commercant): void {
  //     Swal.fire({
  //       title: 'Supprimer ce commerçant ?',
  //       text: `Voulez-vous vraiment supprimer ${commercant.nom} ?`,
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#d33',
  //       cancelButtonText: 'Annuler',
  //       confirmButtonText: 'Oui, supprimer'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         this.commercantService.deleteCommercant(commercant.id_user!).subscribe({
  //           next: () => {
  //             this.commercants = this.commercants.filter(c => c.id_user !== commercant.id_user);
  //             Swal.fire('Supprimé !', 'Commerçant supprimé.', 'success');
  //           },
  //           error: () => Swal.fire('Erreur', 'Impossible de supprimer.', 'error')
  //         });
  //       }
  //     });
  //   }

  //   

  //   searchCommercant(): void {
  //     if (!this.searchQuery) {
  //       this.loadCommercants();
  //       this.isSearchActive = false;
  //       return;
  //     }

  //     const query = this.searchQuery.toLowerCase();
  //     this.commercants = this.commercants.filter(c =>
  //       c.nom.toLowerCase().includes(query) ||
  //       c.email.toLowerCase().includes(query) ||
  //       c.tlf.toLowerCase().includes(query) ||
  //       c.age.toLowerCase().includes(query) ||
  //       c.mdp.toLowerCase().includes(query) ||
  //       c.code_postale.toLowerCase().includes(query) 
  //     );
  //     this.isSearchActive = true;
  //   }

  //   onSearchKeydown(event: KeyboardEvent): void {
  //     if (event.key === 'Enter') {
  //       this.searchCommercant();
  //     }
  //   }
}