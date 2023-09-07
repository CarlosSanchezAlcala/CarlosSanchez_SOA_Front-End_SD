import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LegalGuardianService} from "../../services/legal-guardian.service";

@Component({
  selector: 'app-legal-guardian-form',
  templateUrl: './legal-guardian-form.component.html',
  styleUrls: ['./legal-guardian-form.component.scss']
})
export class LegalGuardianFormComponent implements OnInit, OnDestroy {

  legalGuardianForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public legalGuardianServices: LegalGuardianService) {
  }

  ngOnInit(): void {
    this.initLegalGuardianForm();
  }

  navigateLegalGuardian() {
    this.router.navigate(['legal-guardian'])
  }

  initLegalGuardianForm() {
    this.legalGuardianForm = this.fb.group({
      id: [null],
      name: [''],
      father_last_name: [''],
      mother_last_name: [''],
      documentType: [''],
      documentNumber: [''],
      address: [''],
      cell_phone: [''],
      email: [''],
    });
    if (this.legalGuardianServices.legalGuardianSelected) {
      this.legalGuardianForm.patchValue(this.legalGuardianServices.legalGuardianSelected);
    }
  }

  saveLegalGuardian() {
    if (this.legalGuardianServices.legalGuardianSelected) {
      // Actualizar | Modificar
      this.updateLegalGuardian();
    } else {
      // Registrar | Crear
      this.registerLegalGuardian();
    }
  }

  registerLegalGuardian() {
    console.log('Datos ingresados en el formulario: ', this.legalGuardianForm.value);
    this.legalGuardianServices.saveLegalGuardian(this.legalGuardianForm.value).subscribe(res => {
      console.log('Resultado al registrar: ', res);
      this.legalGuardianForm.reset();
      this.navigateLegalGuardian();
    })
  }

  updateLegalGuardian() {
    console.log('Datos ingresados en el formulario: ', this.legalGuardianForm.value);
    this.legalGuardianServices.updateLegalGuardian(this.legalGuardianForm.value).subscribe(res => {
      console.log('Se actualizó correctamente: ', res);
      this.legalGuardianForm.reset();
      this.navigateLegalGuardian();
    })
  }

  ngOnDestroy() {
    this.legalGuardianServices.legalGuardianSelected = undefined;
  }

}
