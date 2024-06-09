import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-emails',
  templateUrl: './gestion-emails.component.html',
  styleUrls: ['./gestion-emails.component.css']
})
export class GestionEmailsComponent implements OnInit {
  emailsForm!: FormGroup; // Utilisation de l'opérateur '!' pour marquer la propriété comme optionnelle

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.emailsForm = this.formBuilder.group({
      numero: ['', Validators.required],
      dateEmission: ['', Validators.required],
      client: ['', Validators.required],
      montant: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Logique de soumission du formulaire
    console.log(this.emailsForm.value);
  }
}
