import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommercantComponent } from './commercant/commercant.component';
import { ClientComponent } from './client/client.component';
import { LivreurComponent } from './livreur/livreur.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ParametresComponent } from './parametres/parametres.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },

    { path: 'dashboard', component: DashboardComponent },

    { path: 'commercants', component: CommercantComponent },

    { path: 'clients', component: ClientComponent },

    { path: 'livreurs', component: LivreurComponent },

    { path: 'commandes', component: CommandesComponent },

    { path: 'settings', component: ParametresComponent },


];
