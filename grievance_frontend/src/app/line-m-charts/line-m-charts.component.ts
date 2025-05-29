import { Component, OnInit } from '@angular/core';
import { GrievanceService } from '../grievance.service';

import { Chart} from 'chart.js';
import { GrievanceTime } from '../grievance-time';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-line-m-charts',
  templateUrl: './line-m-charts.component.html',
  styleUrls: ['./line-m-charts.component.css']
})
export class LineMChartsComponent implements OnInit {

  
  chart={};
  sum:number=0;
  avgResponseTime:number;

  
  grievancetimes:Array<GrievanceTime>=[];
  grievancetimes1:Array<GrievanceTime>=[];
  grievancetimes2:Array<GrievanceTime>=[];
  grievancetimes3:Array<GrievanceTime>=[];
  grievancetimes4:Array<GrievanceTime>=[];

  



  constructor(private grievanceService:GrievanceService,
    private employeeService:EmployeeService) { }

   
  ngOnInit() {

    this.grievanceService.getGrievanceByDivision("Production").subscribe(data=>{
     
      if(data!=null){
        
        for(var i=0;i<50;i++){
          if(data[i]==null){
            break;
          }
          this.grievancetimes.push(data[i]);
  
        };
       
          
         
            console.log(this.grievancetimes);
            if(this.grievancetimes!=null){
              let times=this.grievancetimes.map(data=> data.timeDifference);
              let grievanceId=this.grievancetimes.map(data=> data.grievanceId1);
      
              this.chart=new Chart('canvas', {
                type: 'bar',
                data: {
                  labels: grievanceId,
                  datasets: [
                    {
                      label:'grievance Response Time in Days',
                      data: times,
                      borderColor: '#3cba9f',
                    
                    },
                    
                  ]
                }
      
                
              })
              
            }
  
          
      
        
        
        
      }

      

    })




    this.grievanceService.getGrievanceByDivision("Supply Chain Management").subscribe(data=>{
      
      if(data!=null){

        for(var i=0;i<50;i++){
          if(data[i]==null){
            break;
          }
          this.grievancetimes1.push(data[i]);
  
        };
       
          
          
            console.log(this.grievancetimes1);
            if(this.grievancetimes1!=null){
              let times=this.grievancetimes1.map(data=> data.timeDifference);
              let grievanceId=this.grievancetimes1.map(data=> data.grievanceId1);
      
              this.chart=new Chart('canvas1', {
                type: 'bar',
                data: {
                  labels: grievanceId,
                  datasets: [
                    {
                      label:'grievance Response Time in Days',
                      data: times,
                      borderColor: '#3cba9f',
                    
                    },
                    
                  ]
                }
      
                
              })
              
            }
  
          
      
        
        
        
      }

      

    })

    this.grievanceService.getGrievanceByDivision("Ship Repair Business").subscribe(data=>{
     
      if(data!=null){
       
        for(var i=0;i<50;i++){
          if(data[i]==null){
            break;
          }
          this.grievancetimes2.push(data[i]);
  
        };
         
            console.log(this.grievancetimes2);
            if(this.grievancetimes2!=null){
              let times=this.grievancetimes2.map(data=> data.timeDifference);
              let grievanceId=this.grievancetimes2.map(data=> data.grievanceId1);
      
              this.chart=new Chart('canvas2', {
                type: 'bar',
                data: {
                  labels: grievanceId,
                  datasets: [
                    {
                      label:'grievance Response Time in Days',
                      data: times,
                      borderColor: '#3cba9f',
                    
                    },
                    
                  ]
                }
      
                
              })
              
            }
  
          
      
        
        
        
      }

      

    })


    this.grievanceService.getGrievanceByDivision("Project and Engineering").subscribe(data=>{
  
      if(data!=null){
        for(var i=0;i<50;i++){
          if(data[i]==null){
            break;
          }
          this.grievancetimes3.push(data[i]);
  
        };
          
        
            console.log(this.grievancetimes3);
            if(this.grievancetimes3!=null){
              let times=this.grievancetimes3.map(data=> data.timeDifference);
              let grievanceId=this.grievancetimes3.map(data=> data.grievanceId1);
      
              this.chart=new Chart('canvas3', {
                type: 'bar',
                data: {
                  labels: grievanceId,
                  datasets: [
                    {
                      label:'grievance Response Time in Days',
                      data: times,
                      borderColor: '#3cba9f',
                    
                    },
                    
                  ]
                }
      
                
              })
              
            }
  
          
      
        
        
        
      }

      

    })


    this.grievanceService.getGrievanceByDivision("Finance").subscribe(data=>{

      if(data!=null){
       
          
        for(var i=0;i<50;i++){
          if(data[i]==null){
            break;
          }
          this.grievancetimes4.push(data[i]);
  
        };
            
            if(this.grievancetimes4!=null){
              let times=this.grievancetimes4.map(data=> data.timeDifference);
              let grievanceId=this.grievancetimes4.map(data=> data.grievanceId1);
      
              this.chart=new Chart('canvas4', {
                type: 'bar',
                data: {
                  labels: grievanceId,
                  datasets: [
                    {
                      label:'grievance Response Time in Days',
                      data: times,
                      borderColor: '#3cba9f',
                    
                    },
                    
                  ]
                }
      
                
              })
              
            }
  
          
      
        
        
        
      }

      

    })















    
        
  }


  
    

    
    
   
    









     
    
  


      
  
}
