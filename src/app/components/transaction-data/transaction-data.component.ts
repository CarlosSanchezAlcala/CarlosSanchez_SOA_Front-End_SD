import {Component, OnInit} from '@angular/core';
import {TransactionalDataService} from "../../services/transactional-data.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LegalGuardianService} from "../../services/legal-guardian.service";
import {family} from "../../models/family.model";

@Component({
  selector: 'app-transaction-data',
  templateUrl: './transaction-data.component.html',
  styleUrls: ['./transaction-data.component.scss']
})
export class TransactionDataComponent implements OnInit {

  dataFuncionaryForm: FormGroup = new FormGroup({});
  familyData: any[] = [];
  legalGuardianDataExtract: any[] = [];
  dataAdolescentComplete: any[] = [];
  searchResults: any[] = [];
  searchDNI: string = '';
  searchTimeout: any;
  isSearching: boolean = false;

  constructor(private transactionalService: TransactionalDataService,
              private legalGuardianService2: LegalGuardianService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.findAll();
    this.findAllDataLegalGuardian();
    this.findAllDataAdolescent();
    this.initDataTransaccionalForm();
  }

  findAll() {
    this.transactionalService.findAll().subscribe((dataComplete: any) => {
      console.log('Data de las familias asignadas: ', dataComplete);
      this.familyData = dataComplete;
    })
  }

  findAllDataLegalGuardian() {
    this.legalGuardianService2.findAllActive().subscribe((dataLegalGuardian: any) => {
      console.log('Data de los tutores legales: ', dataLegalGuardian);
      this.legalGuardianDataExtract = dataLegalGuardian;
    })
  }

  findAllDataAdolescent() {
    this.transactionalService.findAdolescent().subscribe((dataCompleteOfAdolescent: any) => {
      console.log('Data de los adolescentes: ', dataCompleteOfAdolescent);
      this.dataAdolescentComplete = dataCompleteOfAdolescent;
    })
  }

  navigateForm() {
    this.router.navigate(['legal-guardian'])
  }

  searchByDni() {
    this.isSearching = true;
    if (this.searchDNI) {
      this.searchTimeout = setTimeout(() => {
        this.searchResults = this.familyData.filter((item: {
          documentNumber: string
        }) => item.documentNumber === this.searchDNI);
        this.isSearching = false;
      }, 1500);
    } else {
      this.isSearching = false;
      this.searchResults = [];
    }
  }

  initDataTransaccionalForm() {
    this.dataFuncionaryForm = this.fb.group({
      id: [null],
      idLegalGuardian: [''],
      idAdolescent: this.fb.array(this.dataAdolescentComplete.map(() => false)),
      active: ['A'],
      description: ['']
    });
  }

  secondWayRegister() {
    const formValue = this.dataFuncionaryForm.value;
    const selectedAdolescent = formValue.idAdolescent
        .map((selected: any, i: any) => selected ? this.dataAdolescentComplete[i].id : null)
        .filter((id: any) => id !== null);

    selectedAdolescent.forEach((adolId: any) => {
      const request: family = {
        id: formValue.id,
        idLegalGuardian: formValue.idLegalGuardian,
        idAdolescent: adolId,
        active: formValue.active,
        description: formValue.description
      };
      this.transactionalService.saveNewTransaccional(request).subscribe((newDataTransaction: any) => {
        console.log('Resultado al registrar: ', newDataTransaction);
      })
    })
    this.dataFuncionaryForm.reset();
  }

  registerTransaction() {
    console.log('Datos ingresados en el formulario: ', this.dataFuncionaryForm.value);
    this.transactionalService.saveNewTransaccional(this.dataFuncionaryForm.value).subscribe((newDataTransaction) => {
      console.log('Resultado al registrar: ', newDataTransaction);
      this.dataFuncionaryForm.reset();
    })
  }
}
