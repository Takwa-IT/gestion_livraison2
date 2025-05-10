import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parametres',
  imports: [FormsModule, CommonModule],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.css'
})
export class ParametresComponent {
  showPassword: boolean = false;

  // user: any = null;
  // editedUser: any = {
  //   prenomUser: '',
  //   nomUser: '',
  //   emailUser: '',
  //   telUser: '',
  //   adresseUser: ''
  // };
  // errorMessage: string = '';
  // successMessage: string = '';

  // constructor(
  //   private ParametresService: ParametresService,
  //   private router: Router
  // ) {}

  // ngOnInit() {
  //   const currentUser = this.ParametresService.userValue;
  //   if (!currentUser) {
  //     this.router.navigate(['/login']);
  //     return;
  //   }

  //   this.user = currentUser;
  //   console.log('Données utilisateur actuelles:', currentUser); // Journal de debug

  //   this.editedUser = {
  //     prenomUser: currentUser.prenomUser || '',
  //     nomUser: currentUser.nomUser || '',
  //     emailUser: currentUser.emailUser || '',
  //     telUser: currentUser.telUser || '',
  //     adresseUser: currentUser.adresseUser || '',
  //     idUser: currentUser.idUser,
  //     role: currentUser.role,
  //     passwordUser: currentUser.passwordUser
  //   };

  //   this.ParametresService.user.subscribe(
  //     (userData) => {
  //       if (userData) {
  //         this.user = userData;
  //       }
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des données utilisateur:', error);
  //       this.errorMessage = 'Erreur lors du chargement des données utilisateur.';
  //     }
  //   );
  // }

  // get userRole(): string {
  //   return this.user?.role || 'Non disponible';
  // }

  // saveSettings(): void {
  //   if (!this.user) {
  //     this.errorMessage = 'Veuillez vous connecter pour sauvegarder les paramètres.';
  //     return;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(this.editedUser.emailUser)) {
  //     this.errorMessage = 'Veuillez saisir une adresse e-mail valide.';
  //     return;
  //   }

  //   if (!this.editedUser.prenomUser || !this.editedUser.nomUser) {
  //     this.errorMessage = 'Le prénom et le nom sont obligatoires.';
  //     return;
  //   }

  //   console.log('Sauvegarde des paramètres utilisateur:', this.editedUser); // Journal de debug

  //   this.ParametresService.updateUserSettings(this.editedUser).subscribe(
  //     (response) => {
  //       console.log('Réponse à la mise à jour:', response); // Journal de debug
  //       this.successMessage = 'Informations utilisateur mises à jour avec succès.';
  //       this.user = response;
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la sauvegarde des informations utilisateur:', error);
  //       this.errorMessage = 'Échec de la mise à jour des informations. Veuillez réessayer.';
  //     }
  //   );
  // }
}