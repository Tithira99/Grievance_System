import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  baseURL="http://localhost:82/employees";

  constructor(private httpClient:HttpClient) {}

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);

  }

  addEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);

  }
  updateEmployee(id:string, employee:Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id:string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getEmployeeByUserName(userName:string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/username/${userName}`);
  }

  getLineManagers(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/lineManagers`);
  }

}
