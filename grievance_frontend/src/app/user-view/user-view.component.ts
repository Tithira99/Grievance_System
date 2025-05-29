import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  id:string;
  grievances:Grievance[];

  constructor(private grievanceService:GrievanceService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.ngOnInit()
 
    },1000*2)
     

    this.id = this.route.snapshot.params['id'];
    
    this.grievanceService.getGrievanceByEmployeeId(this.id).subscribe(data=>{
      console.log(data);
      this.grievances=data;
    })

    


  }

  viewG(id:string){
    this.router.navigate(['user-g-view', id]);
  }

  addGrievance(){
    this.router.navigate(['create-grievance', this.id]);

  }

  updateProfile(id:string){
    this.router.navigate(['employee-profile', id]);

  }





}
