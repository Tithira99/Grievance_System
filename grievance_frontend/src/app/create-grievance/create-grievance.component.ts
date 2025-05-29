import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Grievance } from '../grievance';
import { GrievanceService } from '../grievance.service';
import { ImageUploadService } from '../image-upload.service';


@Component({
  selector: 'app-create-grievance',
  templateUrl: './create-grievance.component.html',
  styleUrls: ['./create-grievance.component.css']
})
export class CreateGrievanceComponent implements OnInit {
  grievances:Grievance[];
  grievance: Grievance = new Grievance();
  selectedFile:File;
  files:FormData[];
  id:string;

  constructor(private grievanceService: GrievanceService, 
    private router: Router,
    private uploadImage: ImageUploadService,
    private httpClient:HttpClient,
    private route:ActivatedRoute,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }

  saveGrievance(){
    this.grievanceService.addGrievance(this.grievance).subscribe(data =>{
      console.log(data);
      this.goTogrievanceList();
    },
    error => console.log(error));
  }

  goTogrievanceList(){
    this.router.navigate(['/grievances']);

  }
  
  onSubmit(){
    this.grievance.employeeID=this.id;
    this.grievanceService.addGrievance(this.grievance).subscribe(data =>{
      console.log(data);
      this.grievance=data;

     


      const file=new FormData();
      console.log(this.grievance.grievanceID);
      file.append('file', this.selectedFile);
      file.append('grievanceId', this.grievance.grievanceID);
      this.httpClient.post('http://localhost:82/image/uploadFile', file ).subscribe(data=>{
        console.log(data);
    })

    },
    error => console.log(error));

    this.goToUserView()

    
    

    
    
   
    

    
    

  }

  goToBack(id:string){
    

  }

  


  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  goToUserView(){
      this.router.navigate(['user-view', this.id]);
  }


  

  

}
