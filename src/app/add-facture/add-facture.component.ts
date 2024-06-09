// add-facture.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent {
  factureForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.factureForm = this.fb.group({
      numero: [''],
      dateEmission: [''],
      client: [''],
      montant: [''],
      description: ['']
    });
  }

  onSubmit() {
    console.log(this.factureForm.value);
  }
}
