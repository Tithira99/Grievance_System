import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgmTableService {

  baseURL="http://localhost:82/agmTable";

  constructor(private httpClient:HttpClient) { }


  getagmTable():Observable<Object[][]>{
    
    return this.httpClient.get<Object[][]>(`${this.baseURL}`);

  }

  
}
