import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GestionEmailsComponent } from './gestion-emails/gestion-emails.component';
import { MIGRATIONDOFFREComponent } from './migration-d-offre/migration-d-offre.component';
import { RECLAMATIONSComponent } from './reclamations/reclamations.component';
import { SUGGESTIONSComponent } from './suggestions/suggestions.component';
import { TRANSFERTDELIGNEComponent } from './transfert-de-l-igne/transfert-de-l-igne.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddFactureComponent,
    GestionEmailsComponent,
    MIGRATIONDOFFREComponent,
    RECLAMATIONSComponent,
    SUGGESTIONSComponent,
    TRANSFERTDELIGNEComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
