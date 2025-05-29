import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-gm-add-sol',
  templateUrl: './gm-add-sol.component.html',
  styleUrls: ['./gm-add-sol.component.css']
})
export class GmAddSolComponent implements OnInit {

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
     
    this.router.navigate(['gm-list'])
      

  }

  onSubmit(id:string, grievance:Grievance){
    if(grievance.gmResponse!="Received"){
      if(grievance.grievanceStatus=="GM Received"){

        grievance.grievanceStatus="Admin Received";
        this.grievanceService.updateGrievance(id, grievance).subscribe(data=>{
          console.log(data);
        });

        this.goToBack();
      }else{
        this.message="This operation is not allowed at this stage of the Grievance";
      }
    }else{
      this.message="Comment is Required"
    }
  }

}
