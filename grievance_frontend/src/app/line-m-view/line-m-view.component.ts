import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';
import { ImageModel } from '../image-model';

@Component({
  selector: 'app-line-m-view',
  templateUrl: './line-m-view.component.html',
  styleUrls: ['./line-m-view.component.css']
})
export class LineMViewComponent implements OnInit {
  id:string;
  grievance:Grievance=new Grievance();
  byteData:any;
  imageModel:ImageModel[];
  image:any;
  eid:string;

  constructor(private grievanceService: GrievanceService,
    private router:Router,
    private route: ActivatedRoute,
    private httpClient:HttpClient,
    private employeeService:EmployeeService) { }

    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

      this.grievanceService.getGrievanceById(this.id).subscribe(data=>{

        this.grievance=data;

      }, error=> console.log(error));

      console.log('http://localhost:82/image/displayfile/'+this.id); 
      this.httpClient.get<ImageModel[]>('http://localhost:82/image/displayfile/'+this.id).subscribe(data=>{
      

        if(data[0]==null){

          console.log("No Image");

        }else{
          this.imageModel=data;
          this.byteData=this.imageModel[0].picByte;
          
          this.image='data:'+ this.imageModel[0].type +';base64,'+this.byteData;
        }
        
        

      
    });
  }

  goToBack(grievance:Grievance){
    this.employeeService.getEmployeeById(grievance.employeeID).subscribe(data=>{
      this.eid=data.lineManager;
      this.router.navigate(['line-m-list', this.eid]);
    })
    
  }

}
