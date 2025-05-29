import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  
  baseURL="http://localhost:82";

  constructor(private httpClient:HttpClient) { }

  getagmTable():Observable<Object[][]>{
    
    return this.httpClient.get<Object[][]>(`${this.baseURL}/agmTable`);

  }

  getAdminDetails():Observable<Object[][]>{
    return this.httpClient.get<Object[][]>(`${this.baseURL}/adminTable`)
  }

  getGmDetails():Observable<Object[][]>{
    return this.httpClient.get<Object[][]>(`${this.baseURL}/gmTable`)
  }

  getLineMDetails(id:string):Observable<Object[][]>{
    return this.httpClient.get<Object[][]>(`${this.baseURL}/lineManagerDetails/${id}`)
  }





}
