import {Component, OnInit} from '@angular/core';
import {LegalGuardianService} from "../../services/legal-guardian.service";
import {Router} from "@angular/router";
import {LegalGuardianModel} from "../../models/legalGuardian.model";

@Component({
  selector: 'app-legal-guardian',
  templateUrl: './legal-guardian.component.html',
  styleUrls: ['./legal-guardian.component.scss']
})
export class LegalGuardianComponent implements OnInit {

  legalGuardians: any[] = [];
  searchResults: any[] = [];
  searchDNI: string = '';
  searchTimeout: any;
  isSearching: boolean = false;

  constructor(private legalGuardianService: LegalGuardianService,
              private router: Router) { }

  ngOnInit() {
    this.findAllActive();
  }

  findAll() {
    this.legalGuardianService.findAll().subscribe((res: any) => {
      console.log(res);
      this.legalGuardians = res;
    })
  }

  findAllActive() {
    this.legalGuardianService.findAllActive().subscribe((res: any) => {
      console.log(res);
      this.legalGuardians = res;
    })
  }

  navigateForm() {
    this.router.navigate(['legal-guardian-form'])
  }

  navigateFormInactive() {
    this.router.navigate(["list-inactive"]);
  }

  editLegalGuardian(legalGuardian: LegalGuardianModel) {
    this.legalGuardianService.legalGuardianSelected = legalGuardian;
    this.navigateForm()
  }

  deleteLegalGuardian(identificador: number) {
    this.legalGuardianService.deleteLegalGuardian(identificador).subscribe(res =>{
      console.log('Se eliminó correctamente: ', res);
      this.findAll();
    });
  }

  searchByDni() {
    this.isSearching = true;
    if (this.searchDNI) {
      this.searchTimeout = setTimeout(() => {
        this.searchResults = this.legalGuardians.filter((item: {documentNumber: string}) => item.documentNumber === this.searchDNI);
        this.isSearching = false;
      }, 1500);
    } else {
      this.isSearching = false;
      this.searchResults = [];
    }
  }

  deletedLogicalLegalGuardian(legalGuardian: LegalGuardianModel) {
    this.legalGuardianService.deletedLogicalLegalGuardian(legalGuardian).subscribe(res => {
      console.log('Se desactivó correctamente: ', res);
      this.findAllActive();
    });
  }

}
