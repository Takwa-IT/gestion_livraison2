import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientsService, Client } from '../services/clients.service'; // Import the service and Client interface

@Component({
  selector: 'app-client',
  imports: [CommonModule, RouterLink, RouterModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  isUsersDropdownOpen = false;
  clients: any;

  toggleUsersDropdown(): void {
    this.isUsersDropdownOpen = !this.isUsersDropdownOpen;
  }

  //   clients: Client[] = [];
  //   searchQuery: string = '';
  //   isSearchActive: boolean = false;

  //   constructor(
  //     private clientsService: ClientsService,
  //     private router: Router
  //   ) { }

  //   ngOnInit(): void {
  //     this.loadClients();
  //   }

  //   loadClients(): void {
  //     this.clientsService.getAllClients().subscribe({
  //       next: (data) => (this.clients = data),
  //       error: (err) => console.error('Erreur chargement clients:', err)
  //     });
  //   }

  //   addClient(): void {
  //     Swal.fire({
  //       title: 'Ajouter un Client',
  //       html:
  //         '<input id="swal-input1" class="swal2-input" placeholder="Nom">' +
  //         '<input id="swal-input2" class="swal2-input" placeholder="Role">' +
  //         '<input id="swal-input3" class="swal2-input" placeholder="Mot de Passe">' +
  //         '<input id="swal-input4" class="swal2-input" placeholder="Email">' +
  //         '<input id="swal-input5" class="swal2-input" placeholder="Âge">' +
  //         '<input id="swal-input6" class="swal2-input" placeholder="Adresse">' +
  //         '<input id="swal-input7" class="swal2-input" placeholder="Téléphone">' +
  //         '<input id="swal-input8" class="swal2-input" placeholder="Code Postale">',

  //       focusConfirm: false,
  //       confirmButtonText: 'Ajouter',
  //       confirmButtonColor: '#228B22',
  //       preConfirm: () => {
  //         const nom = (document.getElementById('swal-input1') as HTMLInputElement).value;
  //         const role = (document.getElementById('swal-input2') as HTMLInputElement).value;
  //         const mdp = (document.getElementById('swal-input3') as HTMLInputElement).value;
  //         const email = (document.getElementById('swal-input4') as HTMLInputElement).value;
  //         const age = (document.getElementById('swal-input5') as HTMLInputElement).value;
  //         const adresse = (document.getElementById('swal-input6') as HTMLInputElement).value;
  //         const tlf = (document.getElementById('swal-input7') as HTMLInputElement).value;
  //         const code = (document.getElementById('swal-input8') as HTMLInputElement).value;


  //         if (!nom || !role || !mdp || !email || !age || !adresse || !tlf || !code) {
  //           Swal.showValidationMessage('Veuillez remplir tous les champs');
  //           return false;
  //         }

  //         return { nom, mdp, email, age, adresse, tlf, code , role: 'Client'};
  //       }
  //     }).then((result) => {
  //       if (result.isConfirmed && result.value) {
  //         this.clientsService.createClient(result.value).subscribe({
  //           next: (newClient) => {
  //             this.clients.push(newClient);
  //             Swal.fire('Succès !', 'Client ajouté.', 'success');
  //           },
  //           error: (err) => Swal.fire('Erreur!', 'Ajout échoué.', 'error')
  //         });
  //       }
  //     });
  //   }

  //   editClient(client: Client): void {
  //     Swal.fire({
  //       title: 'Modifier le Client',
  //       html:
  //         '<input id="swal-input1" class="swal2-input" placeholder="Nom">' +
  //         '<input id="swal-input2" class="swal2-input" placeholder="Role">' +
  //         '<input id="swal-input3" class="swal2-input" placeholder="Mot de Passe">' +
  //         '<input id="swal-input4" class="swal2-input" placeholder="Email">' +
  //         '<input id="swal-input5" class="swal2-input" placeholder="Âge">' +
  //         '<input id="swal-input6" class="swal2-input" placeholder="Adresse">' +
  //         '<input id="swal-input7" class="swal2-input" placeholder="Téléphone">' +
  //         '<input id="swal-input8" class="swal2-input" placeholder="Code Postale">',
  //       focusConfirm: false,
  //       confirmButtonText: 'Sauvegarder',
  //       confirmButtonColor: '#228B22',
  //       preConfirm: () => {
  //          const nom = (document.getElementById('swal-input1') as HTMLInputElement).value;
  //         const role = (document.getElementById('swal-input2') as HTMLInputElement).value;
  //         const mdp = (document.getElementById('swal-input3') as HTMLInputElement).value;
  //         const email = (document.getElementById('swal-input4') as HTMLInputElement).value;
  //         const age = (document.getElementById('swal-input5') as HTMLInputElement).value;
  //         const adresse = (document.getElementById('swal-input6') as HTMLInputElement).value;
  //         const tlf = (document.getElementById('swal-input7') as HTMLInputElement).value;
  //         const code = (document.getElementById('swal-input8') as HTMLInputElement).value;

  //         if (!nom || !role || !mdp || !email || !age || !adresse || !tlf || !code) {
  //           Swal.showValidationMessage('Please fill all fields');
  //           return false;
  //         }

  //         return {id_user: client.id_user , nom, role, mdp, email, age, adresse, tlf, code };
  //       }
  //     }).then((result) => {
  //       if (result.isConfirmed && result.value) {
  //         this.clientsService.updateClient(client.id_user!, result.value).subscribe({
  //           next: (updatedClient) => {
  //             const index = this.clients.findIndex((c) => c.id_user === client.id_user);
  //             if (index !== -1) {
  //               this.clients[index] = updatedClient;
  //             }
  //             Swal.fire('Modifié !'', 'Client mis à jour.', 'success');
  //           },
  //           error: (err) => Swal.fire('Erreur!', 'Échec de la mise à jour.', 'error')
  //         });
  //       }
  //     });
  //   }

  //   deleteClient(client: Client): void {
  //     Swal.fire({
  //       title: 'Supprimer ce client ? ',
  //       text: `Supprimer ce commerçant  ${client.client_name}?`,
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#d33',
  //       cancelButtonColor: '#3085d6',
  //       cancelButtonText: 'Annuler',
  //       confirmButtonText: 'Oui, supprimer'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         this.clientsService.deleteClient(client.id_user!).subscribe({
  //           next: () => {
  //             this.clients = this.clients.filter((c) => c.id_user !== client.id_user); // Remove the client from the list
  //             Swal.fire('Supprimé !', 'Client supprimé.', 'success');
  //           },
  //           error: (err) => Swal.fire('Erreur!', 'Impossible de supprimer.', 'error')
  //         });
  //       }
  //     });
  //   }

  //   

  //   searchClient(): void {
  //     if (!this.searchQuery) {
  //       this.loadClients();
  //       this.isSearchActive = false;
  //       return;
  //     }

  //     const query = this.searchQuery.toLowerCase();
  //     this.clients = this.clients.filter(
  //       (client) =>
  //         client.nom.toLowerCase().includes(query) ||
  //         client.role.toLowerCase().includes(query) ||
  //         client.adresse.toLowerCase().includes(query) ||
  //         client.mdp.toLowerCase().includes(query) ||
  //         client.tlf.toLowerCase().includes(query) ||
  //         client.code.toLowerCase().includes(query) ||
  //         client.email.toLowerCase().includes(query) ||
  //         client.age.toLowerCase().includes(query) ||
  //         client.age.toLowerCase().includes(query)
  //     );
  //     this.isSearchActive = true;
  //   }

  //   onSearchKeydown(event: KeyboardEvent): void {
  //     if (event.key === 'Enter') {
  //       this.searchClient();
  //     }
  //   }
}
