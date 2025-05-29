import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.css']
})
export class AddSolutionComponent implements OnInit {

  id:string;
  eid:string;
  grievance:Grievance=new Grievance();
  employee:Employee=new Employee();
  message:any;

  constructor(private grievanceService:GrievanceService,
    private router:Router,
    private route:ActivatedRoute,
    private employeeService:EmployeeService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    

    this.grievanceService.getGrievanceById(this.id).subscribe(data=>{
      this.grievance=data;
      this.eid=this.grievance.employeeID;

      this.getEmployee(this.eid);
      

    }, error=> console.log(error));

  }

 

  onSubmit(id:string, grievance:Grievance){
    if(grievance.grievanceSolution!="Pending"){
      if(grievance.grievanceStatus=="Admin Received"){
        grievance.grievanceStatus="AGM Received";
        grievance.agmResponse="Received";
  
        this.grievanceService.updateGrievance(id, grievance).subscribe(data=>{
          console.log(data);
        }, error=> console.log(error));
  
        this.goToAdminView();
  
  
      }else{
        this.message="This Operation is not allowed at this stage of the Grievance!";
  
  
  
      }
  

    }else{
      this.message="Suggested Solution is Required"
    }
    
    
  }
  

  goToAdminView(){
    this.router.navigate(['grievances']);
  }


  getEmployee(eid:string){
    this.employeeService.getEmployeeById(this.eid).subscribe(data =>{
      this.employee=data;
      
      
    }, error=>console.log(error));

  }

  goToBack(){
    this.router.navigate(['grievances']);
  }

}
