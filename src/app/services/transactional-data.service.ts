import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {family} from "../models/family.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionalDataService {

  private apiUrlData = 'http://localhost:8080/api/familyData/list'; // API DE CONEXIÓN PARA PODER OBTENER LOS DATOS DE LA BASE DE DATOS
  private apiRegister= 'http://localhost:8080/api/familyData';
  private apiLegalGuardian = 'http://localhost:8080/api/adolescentData/listData'

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.apiUrlData);
  }

  findAdolescent() {
    return this.http.get(this.apiLegalGuardian);
  }

  saveNewTransaccional(dataFamily: family) {
    return this.http.post(this.apiRegister, dataFamily);
  }

}
