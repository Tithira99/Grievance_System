import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Grievance } from './grievance';
import { GrievanceTime } from './grievance-time';

@Injectable({
  providedIn:'root'
})

export class GrievanceService {

  private baseURL="http://localhost:82/grievances";


  constructor(private httpClient: HttpClient) { }

  getGrievancesList(): Observable<Grievance[]>{
    return this.httpClient.get<Grievance[]>(`${this.baseURL}`);
  }

  addGrievance(grievance: Grievance): Observable<Grievance>{
    return this.httpClient.post<Grievance>(`${this.baseURL}`,grievance);
  }

  getGrievanceById(id:string): Observable<Grievance>{
    return this.httpClient.get<Grievance>(`${this.baseURL}/${id}`);
  }

  updateGrievance(id:string, grievance: Grievance): Observable<Grievance>{

    return this.httpClient.put<Grievance>(`${this.baseURL}/${id}`,grievance);
  }

  getGrievanceByEmployeeId(id:string): Observable<Grievance[]>{
    return this.httpClient.get<Grievance[]>(`${this.baseURL}/employeeid/${id}`);
  }
  getGrievanceTime(): Observable<GrievanceTime[]>{
    return this.httpClient.get<GrievanceTime[]>(`${this.baseURL}/time`);
  }

  addResponseTime(div:string, grievance:Grievance): Observable<GrievanceTime>{
    return this.httpClient.post<GrievanceTime>(`${this.baseURL}/time/${div}`, grievance);
  }

  getGrievanceByDivision(div:string): Observable<GrievanceTime[]>{
    return this.httpClient.get<GrievanceTime[]>(`${this.baseURL}/time/${div}`);
  }
  

}

