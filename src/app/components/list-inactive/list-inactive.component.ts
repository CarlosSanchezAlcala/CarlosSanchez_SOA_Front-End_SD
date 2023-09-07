import {Component, OnInit} from '@angular/core';
import {LegalGuardianService} from "../../services/legal-guardian.service";
import {Router} from "@angular/router";
import {LegalGuardianModel} from "../../models/legalGuardian.model";

@Component({
  selector: 'app-list-inactive',
  templateUrl: './list-inactive.component.html',
  styleUrls: ['./list-inactive.component.scss']
})
export class ListInactiveComponent implements OnInit {

  legalGuardians: any[] = [];
  searchResults: any[] = [];
  searchDNI: string = '';
  searchTimeout: any;
  isSearchingInactive: boolean = false;

  constructor(private legalGuardianService: LegalGuardianService,
              private router: Router) {
  }

  ngOnInit() {
    this.findAllInactive();
  }

  findAllInactive() {
    this.legalGuardianService.findAllInactive().subscribe((res: any) => {
      console.log(res);
      this.legalGuardians = res;
    })
  }

  editLegalGuardian(legalGuardian: LegalGuardianModel) {
    this.legalGuardianService.legalGuardianSelected = legalGuardian;
    this.navigateForm()
  }

  reactivatesLogicalLegalGuardian(legalGuardian: LegalGuardianModel) {
    this.legalGuardianService.reactivateLogicalLegalGuardian(legalGuardian).subscribe(res => {
      console.log('Se desactivó correctamente: ', res);
      this.findAllInactive();
    });
  }

  searchByDniInactive() {
    this.isSearchingInactive = true;
    if (this.searchDNI) {
      this.searchTimeout = setTimeout(() => {
        this.searchResults = this.legalGuardians.filter((item: {documentNumber: string}) => item.documentNumber === this.searchDNI);
        this.isSearchingInactive = false;
      }, 1500);
    } else {
      this.isSearchingInactive = false;
      this.searchResults = [];
    }
  }

  navigateForm() {
    this.router.navigate(['legal-guardian-form'])
  }

  navigateFormActive() {
    this.router.navigate(["legal-guardian"]);
  }

}
