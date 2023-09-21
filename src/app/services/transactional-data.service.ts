import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionalDataService {

  private apiUrlData = 'http://localhost:8080/api/familyData/list'; // API DE CONEXIÓN PARA PODER OBTENER LOS DATOS DE LA BASE DE DATOS

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.apiUrlData);
  }
}
