import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  employee:Employee;
  error:any;


  constructor(private employeeService:EmployeeService,
    private router:Router,
    private Route:ActivatedRoute,
    private elRef:ElementRef) { }

  ngOnInit(): void {
    
  }

  onSubmit(userName:string, password:string){
    this.employeeService.getEmployeeByUserName(userName).subscribe(data=>{
      this.employee=data;
      if(this.employee!=null){
        if(this.employee.password==password){

          if(this.employee.role=="User"){
            this.router.navigate(['user-view',this.employee.employeeID])
          }else if(this.employee.role=="Admin"){
  
            this.router.navigate(['grievances'])
  
  
          }else if(this.employee.role=="AGM"){
  
            this.router.navigate(['agm-list'])
  
          }else if(this.employee.role=="GM"){
  
            this.router.navigate(['gm-list']);
  
          }else if(this.employee.role=="Line Manager"){
  
            this.router.navigate(['line-m-list', this.employee.employeeID]);
  
          }
          
          
        }else{

          this.error="Invalid Credentials";
  
        }
       
      }
      
    },error=> this.error="Invalid Credentials");

  }

}
