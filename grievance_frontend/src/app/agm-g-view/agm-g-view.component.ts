import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';
import { ImageModel } from '../image-model';

@Component({
  selector: 'app-agm-g-view',
  templateUrl: './agm-g-view.component.html',
  styleUrls: ['./agm-g-view.component.css']
})
export class AgmGViewComponent implements OnInit {
  
  id:string;
  grievance:Grievance=new Grievance();
  byteData:any;
  imageModel:ImageModel[];
  image:any;

  constructor(private grievanceService: GrievanceService,
    private router:Router,
    private route: ActivatedRoute,
    private httpClient:HttpClient) { }

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

  goToBack(){
    this.router.navigate(['agm-list']);
  }


}
