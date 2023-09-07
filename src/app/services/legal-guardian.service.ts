import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LegalGuardianModel} from "../models/legalGuardian.model";

@Injectable({
  providedIn: 'root'
})
export class LegalGuardianService {

  url: string = 'http://localhost:8080/api/legalGuardian/list';
  urlRegistro: string = 'http://localhost:8080/api/legalGuardian';

  legalGuardianSelected: LegalGuardianModel | undefined = undefined;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.url);
  }

  findAllActive() {
    return this.http.get(this.url + '/active');
  }

  findAllInactive() {
    return this.http.get(this.url + '/inactive');
  }

  saveLegalGuardian(legalGuardian: LegalGuardianModel) {
    return this.http.post(this.urlRegistro, legalGuardian);
  }

  updateLegalGuardian(legalGuardian: LegalGuardianModel) {
    return this.http.put(this.urlRegistro + '/' + legalGuardian.id, legalGuardian);
  }

  deletedLogicalLegalGuardian(legalGuardian: LegalGuardianModel) {
    return this.http.put(this.urlRegistro + '/deletedLogical/' + legalGuardian.id, legalGuardian);
  }

  reactivateLogicalLegalGuardian(legalGuardian: LegalGuardianModel) {
    return this.http.put(this.urlRegistro + '/reactivateLogical/' + legalGuardian.id, legalGuardian);
  }

  deleteLegalGuardian(identificador: number) {
    return this.http.delete(`${this.urlRegistro}/${identificador}`)
  }

  findAllId(identificador: number) {
    return this.http.get(`${this.urlRegistro}/${identificador}`);
  }

}
