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
export class CommercantComponent {

}