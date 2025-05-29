import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../filter.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-grievance-list',
  templateUrl: './grievance-list.component.html',
  styleUrls: ['./grievance-list.component.css']
})
export class GrievanceListComponent implements OnInit {

  objects: Object[][];
  grievances: Grievance[];

  constructor(private grievanceService: GrievanceService,
    private router: Router, private adminService: FilterService) { }



  ngOnInit(): void {
    this.getAdminDetails();
    setTimeout(()=>{
      this.ngOnInit()
 
    },1000*2)



  }

  private getGrievances(){
    this.grievanceService.getGrievancesList().subscribe(data => {
      this.grievances=data;
     
    });
  }

  

  getAdminDetails(){
    this.adminService.getAdminDetails().subscribe(data =>{
      this.objects=data;
      
     
    })
  }

  viewG(id:Object){
    this.router.navigate((['grievance-view', id.toString()]))
    

  }

  goToAddSol(id:Object){
    this.router.navigate((['addSolution-view', id.toString()]))
  }

  goToResponses(id:Object){
    this.router.navigate(['gm-agm-response', id.toString()]);

  }
  

}
