import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Commercant, CommercantsService } from '../services/commercants.service';


@Component({
  selector: 'app-commercant',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './commercant.component.html',
  styleUrl: './commercant.component.css'
})
export class CommercantComponent  {
  // commercants: Commercant[] = [];
  // newCommercant: Commercant = {
  //   nomPrenom: '',
  //   role: '',
  //   motDePasse: '',
  //   email: '',
  //   adresse: '',
  //   age: 0,
  //   telephone: '',
  //   codePostale: ''
  // };

  // constructor(private commercantsService: CommercantsService) { }

  // ngOnInit(): void {
  //   this.loadCommercants();
  // }

  // loadCommercants(): void {
  //   this.commercantsService.getAll().subscribe(data => {
  //     this.commercants = data;
  //   });
  // }

  // addCommercant(): void {
  //   if (this.newCommercant.nomDeCommercant.trim()) {
  //     this.commercantsService.create(this.newCommercant).subscribe(() => {
  //       this.loadCommercants();
  //       this.newCommercant = { nomDeCommercant: '', codePostale: '', adresse: '' };
  //     });
  //   }
  // }

  // deleteCommercant(id: number | undefined): void {
  //   if (id && confirm('Confirmer la suppression ?')) {
  //     this.commercantsService.delete(id).subscribe(() => {
  //       this.loadCommercants();
  //     });
  //   }
  // }
}