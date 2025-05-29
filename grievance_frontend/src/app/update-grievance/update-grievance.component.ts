import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../employee.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-update-grievance',
  templateUrl: './update-grievance.component.html',
  styleUrls: ['./update-grievance.component.css']
})
export class UpdateGrievanceComponent implements OnInit {
  grievance:Grievance=new Grievance();
  id:string;


  constructor(private grievanceService:GrievanceService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];

    this.grievanceService.getGrievanceById(this.id).subscribe(data=>{

      this.grievance=data;

    }, error=>console.log(error));

    
  }

  onSubmit(){
    this.grievanceService.updateGrievance(this.id, this.grievance).subscribe(data=>{
      console.log(data);
    }, error=>console.log(error))
  }
  

}
