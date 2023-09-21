import {Component, OnInit} from '@angular/core';
import {TransactionalDataService} from "../../services/transactional-data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-transaction-data',
    templateUrl: './transaction-data.component.html',
    styleUrls: ['./transaction-data.component.scss']
})
export class TransactionDataComponent implements OnInit {

    familyData: any[] = [];
    searchResults: any[] = [];
    searchDNI: string = '';
    searchTimeout: any;
    isSearching: boolean = false;

    constructor(private transactionalService: TransactionalDataService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.findAll();
    }

    findAll() {
        this.transactionalService.findAll().subscribe((dataComplete: any) => {
            console.log(dataComplete);
            this.familyData = dataComplete;
        })
    }

    navigateForm() {
        this.router.navigate(['legal-guardian'])
    }

    searchByDni() {
        this.isSearching = true;
        if (this.searchDNI) {
            this.searchTimeout = setTimeout(() => {
                this.searchResults = this.familyData.filter((item: {documentNumber: string}) => item.documentNumber === this.searchDNI);
                this.isSearching = false;
            }, 1500);
        } else {
            this.isSearching = false;
            this.searchResults = [];
        }
    }

}
