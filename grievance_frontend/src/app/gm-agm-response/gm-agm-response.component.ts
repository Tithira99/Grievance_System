import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grievance } from '../grievance';
import { GrievanceListComponent } from '../grievance-list/grievance-list.component';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-gm-agm-response',
  templateUrl: './gm-agm-response.component.html',
  styleUrls: ['./gm-agm-response.component.css']
})
export class GmAgmResponseComponent implements OnInit {
  id:string;
  grievance:Grievance;
  constructor(private grievanceService:GrievanceService, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.grievanceService.getGrievanceById(this.id).subscribe(data=>{
      this.grievance=data;
    },error=>console.log(error))
  }

  goToBack(){
    this.router.navigate(['grievances']);

  }

}
