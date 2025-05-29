import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminTableService {

  baseURL="http://localhost:82/adminTable"

  constructor(private httpClient:HttpClient) { }

  getAdminDetails():Observable<Object[][]>{
    return this.httpClient.get<Object[][]>(`${this.baseURL}`)
  }
}
