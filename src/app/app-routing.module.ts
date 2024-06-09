import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactureComponent } from './add-facture/add-facture.component'; 
import { GestionEmailsComponent } from './gestion-emails/gestion-emails.component';
import { MIGRATIONDOFFREComponent } from './migration-d-offre/migration-d-offre.component';
import { RECLAMATIONSComponent } from './reclamations/reclamations.component';
import { SUGGESTIONSComponent } from './suggestions/suggestions.component';
import { TRANSFERTDELIGNEComponent } from './transfert-de-l-igne/transfert-de-l-igne.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: SidebarComponent, children: [
    { path: '', redirectTo: 'add-facture', pathMatch: 'full' }, // Redirection par défaut sous /welcome
    { path: 'add-facture', component: AddFactureComponent }, 
  { path: 'Gestion-emails', component: GestionEmailsComponent },
  { path: 'MIGRATION-D-OFFRE', component: MIGRATIONDOFFREComponent },
  { path: 'Reclamation', component: RECLAMATIONSComponent },
  { path: 'SUGGESTIONS', component: SUGGESTIONSComponent },
  { path: 'TRANSFERT_DE_LIGNE', component: TRANSFERTDELIGNEComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
