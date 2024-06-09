import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-migration-d-offre',
  templateUrl: './migration-d-offre.component.html',
  styleUrls: ['./migration-d-offre.component.css']
})
export class MIGRATIONDOFFREComponent {
  MigrationForm!: FormGroup; // Déclarez comme undefined avec le suffixe "!"
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec FormBuilder
    this.MigrationForm = this.formBuilder.group({
      numero: ['', Validators.required],
      dateEmission: ['', Validators.required],
      client: ['', Validators.required],
      ancienneOffre: ['', Validators.required],
      nouvelleOffre: ['', Validators.required],
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérifier si le formulaire est valide
    if (this.MigrationForm.valid) {
      // Logique pour traiter les données du formulaire
      console.log(this.MigrationForm.value);
    } else {
      // Marquer tous les champs comme touchés pour afficher les messages d'erreur
      this.MigrationForm.markAllAsTouched();
    }
  }
}
