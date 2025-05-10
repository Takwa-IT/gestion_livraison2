import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommercantComponent } from './commercant/commercant.component';
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },

    { path: 'dash', component: DashboardComponent },

    { path: 'commercants', component: CommercantComponent },

    { path: 'clients', component: ClientComponent },

];
