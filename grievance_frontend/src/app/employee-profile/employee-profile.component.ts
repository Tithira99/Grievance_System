import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  id:string;
  employee:Employee=new Employee();
  message:any;
  error:any;
  constructor(private employeeService:EmployeeService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
      
    }, error => console.log(error));

    
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToFollowUpPage(this.id);
      this.message="Updated Successfully";

    },error => this.error="update Failed");
  }

  goToFollowUpPage(id:string){
    this.router.navigate(['/user-view', id]);

  }

}



