import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-agm-add-sol',
  templateUrl: './agm-add-sol.component.html',
  styleUrls: ['./agm-add-sol.component.css']
})
export class AgmAddSolComponent implements OnInit {

  id:string;
  grievance:Grievance;
  message:any;
  constructor(private grievanceService:GrievanceService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.grievanceService.getGrievanceById(this.id).subscribe(data=>{
        this.grievance=data;
        console.log(this.grievance.grievanceSolution);

      },error=>console.log(error))
  }

    goToBack(){
     
      this.router.navigate(['agm-list'])
      

    }

    onSubmit(id:string, grievance:Grievance){
      if(grievance.agmResponse!="Received"){
        if(grievance.grievanceStatus=="AGM Received"){
          grievance.grievanceStatus="GM Received";
          grievance.gmResponse="Received";
          this.grievanceService.updateGrievance(id, grievance).subscribe(data=>{
            console.log(data);
          });
  
          this.goToBack();
        }else{
          this.message="this Operation is not allowed at this stage of the grievance!";
        }

      }else{
        this.message="Comment is Required!"
      }
     
    }

}
