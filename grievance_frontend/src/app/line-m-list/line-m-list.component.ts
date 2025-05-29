import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { FilterService } from '../filter.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-line-m-list',
  templateUrl: './line-m-list.component.html',
  styleUrls: ['./line-m-list.component.css']
})
export class LineMListComponent implements OnInit {
  id:string;
  objects:Object[][];
  grievance:Grievance;
  date:Date;
  message:any;

  
  constructor(private lineMService:FilterService,
    private router:Router, private route:ActivatedRoute,
    private grievanceService:GrievanceService,
    private employeeService:EmployeeService) { 
      
    }

  ngOnInit(): void {
    setTimeout(()=>{
      this.ngOnInit()
 
    },1000*2)
    this.id=this.route.snapshot.params['id'];

    this.lineMService.getLineMDetails(this.id).subscribe(data =>{
      this.objects=data;
    }, error=>console.log(error));

  }

  sendToHR(id:Object){
  

    this.grievanceService.getGrievanceById(id.toString()).subscribe(data=>{
      this.grievance=data;
      if(this.grievance.grievanceStatus=="Grievance Placed"){

      this.grievance.grievanceStatus="Admin Received";
      this.grievanceService.updateGrievance(this.grievance.grievanceID, this.grievance).subscribe(data=>{
        console.log(data);
        this.employeeService.getEmployeeById(this.id).subscribe(data=>{
          this.grievanceService.addResponseTime(data.division, this.grievance).subscribe(data=>{
            console.log(data);
          })

        })
       
        
        
      })
      }else{
        this.message="This operation is not allowed at this stage of the Grievance!"
  
      }

    })
  


  }

 

  viewG(id:Object){
    
    this.router.navigate(['line-m-view', id.toString()])

  }

  addResponse(id:Object){
    this.router.navigate(['line-manager-sol', id.toString()])
    

  }


  

  



}
