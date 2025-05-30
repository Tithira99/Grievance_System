import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    
    this.getEmployees();

    setTimeout(()=>{
      this.ngOnInit()
 
    },1000*2)
  }

  
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees=data;
    });
  }

  updateEmployee(id:string){
    this.router.navigate(['/update-employee', id]);
  }
  removeEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe(data => {

      this.getEmployees();
      
    })
  }

  employeeDetails(id:string){
    this.router.navigate(['employee-details',id]);
  }

}
