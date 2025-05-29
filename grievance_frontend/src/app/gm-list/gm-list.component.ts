import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../filter.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-gm-list',
  templateUrl: './gm-list.component.html',
  styleUrls: ['./gm-list.component.css']
})
export class GmListComponent implements OnInit {

  objects:Object[][];
  grievance:Grievance;
  message:any;

  constructor(private gmService: FilterService, 
    private router:Router,
    private grievanceService:GrievanceService) { }
 

  ngOnInit(): void {
    this.getGmDetails()

    setTimeout(()=>{
      this.ngOnInit()
 
    },1000*2)
  }

  getGmDetails(){
    this.gmService.getGmDetails().subscribe(data =>{
      this.objects=data;
    })
  }

  viewG(id:Object){
    this.router.navigate(['gm-g-view', id.toString()])

  }
  goToComment(id:Object){
    this.router.navigate(['gm-add-sol', id.toString()])

  }
  approveSolution(id:Object){
    
 
    this.grievanceService.getGrievanceById(id.toString()).subscribe(data=>{
      
      this.grievance=data;
     if(this.grievance.grievanceStatus=="GM Received"){
      
      this.grievance.grievanceStatus="Approved";

      this.grievanceService.updateGrievance(id.toString(),this.grievance).subscribe(data=>{
      
      })
     }else{
      this.message="This operation is not allowed at this stage of the Grievance!"
     }
      


      
    })
    


  }

}
