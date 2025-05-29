import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-line-manager-sol',
  templateUrl: './line-manager-sol.component.html',
  styleUrls: ['./line-manager-sol.component.css']
})
export class LineManagerSolComponent implements OnInit {
  id:string;
  grievance:Grievance;
  eid:string;
  employee:Employee;
  response:any;
  


  constructor(private grievanceService:GrievanceService,
    private route:ActivatedRoute,
    private router:Router,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {


    this.id=this.route.snapshot.params['id'];
    this.grievanceService.getGrievanceById(this.id).subscribe(data=>{
      this.grievance=data;
      console.log(data);

      this.employeeService.getEmployeeById(data.employeeID).subscribe(data=>{
        this.employee=data;
      })
    })
  }

  onSubmit(id:string, grievance:Grievance){
    if(grievance.grievanceStatus=="Grievance Placed"){
      if(grievance.grievanceSolution!="Pending" ){
        grievance.grievanceStatus="Approved";
        this.grievanceService.updateGrievance(id,grievance).subscribe(data=>{
          this.employeeService.getEmployeeById(grievance.employeeID).subscribe(data=>{
            this.eid=data.lineManager;
            this.grievanceService.addResponseTime(this.eid, grievance).subscribe(data=>{
              console.log(data);
            });
            
            
          
          })
          
          this.goToBack(grievance);
        })

      }else{
        this.response="Solution is Required!";

      }
  }else{
    this.response="This Operation is not allowed at this Stage of the Grievance!"
  }
    
  }

  goToBack(grievance:Grievance){
    
    this.employeeService.getEmployeeById(grievance.employeeID).subscribe(data=>{
      this.eid=data.lineManager;
      this.router.navigate(['line-m-list', this.eid]);

     
    })

  }




}
