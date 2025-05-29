import { Component, OnInit } from '@angular/core';
import { GrievanceTime } from '../grievance-time';
import { GrievanceService } from '../grievance.service';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-avg-chart',
  templateUrl: './avg-chart.component.html',
  styleUrls: ['./avg-chart.component.css']
})
export class AvgChartComponent implements OnInit {
 sum:number=0;
 sum1:number=0;
 sum2:number=0;
 sum3:number=0;
 sum4:number=0;

  chart={};
 
  avgResponseTime:number;
  avgResponseTime1:number;
  avgResponseTime2:number;
  avgResponseTime3:number;
  avgResponseTime4:number;
  
  avgTimes:Array<number>=[];
  
  grievancetimes:Array<GrievanceTime>=[];
  grievancetimes1:Array<GrievanceTime>=[];
  grievancetimes2:Array<GrievanceTime>=[];
  grievancetimes3:Array<GrievanceTime>=[];
  grievancetimes4:Array<GrievanceTime>=[];


  constructor(private grievanceService:GrievanceService) { }

  ngOnInit(): void {

    this.grievanceService.getGrievanceByDivision("Production").subscribe(data=>{
   
      if(data!=null){
        
        for(var i=0;i<50;i++){
          if(data[i]==null){
            break;
          }
          this.grievancetimes.push(data[i]);
  
        };

      }
      let times=this.grievancetimes.map(data=> data.timeDifference);

      

      times.forEach((data)=>{
        this.sum=this.sum+data;
      })

      this.avgResponseTime=(this.sum/times.length);
      this.avgTimes.push(this.avgResponseTime);
      console.log(this.avgResponseTime);


      this.grievanceService.getGrievanceByDivision("Supply Chain Management").subscribe(data=>{
   
        if(data!=null){
          
          for(var i=0;i<50;i++){
            if(data[i]==null){
              break;
            }
            this.grievancetimes1.push(data[i]);
    
          };
  
        }
        let times=this.grievancetimes1.map(data=> data.timeDifference);
  
        
  
        times.forEach((data)=>{
          this.sum1=this.sum1+data;
        })
  
        this.avgResponseTime1=this.sum1/times.length;
        this.avgTimes.push(this.avgResponseTime1);

        this.grievanceService.getGrievanceByDivision("Ship Repair Business").subscribe(data=>{
   
          if(data!=null){
            
            for(var i=0;i<50;i++){
              if(data[i]==null){
                break;
              }
              this.grievancetimes2.push(data[i]);
      
            };
    
          }
          let times=this.grievancetimes2.map(data=> data.timeDifference);
    
          
    
          times.forEach((data)=>{
            this.sum2=this.sum2+data;
          })
    
          this.avgResponseTime2=this.sum/times.length;
          this.avgTimes.push(this.avgResponseTime2);

          this.grievanceService.getGrievanceByDivision("Project and Engineering").subscribe(data=>{
   
            if(data!=null){
              
              for(var i=0;i<50;i++){
                if(data[i]==null){
                  break;
                }
                this.grievancetimes3.push(data[i]);
        
              };
      
            }
            let times=this.grievancetimes3.map(data=> data.timeDifference);
      
            
      
            times.forEach((data)=>{
              this.sum3=this.sum3+data;
            })
      
            this.avgResponseTime3=this.sum3/times.length;
            this.avgTimes.push(this.avgResponseTime3);



            this.grievanceService.getGrievanceByDivision("Finance").subscribe(data=>{
   
              if(data!=null){
                
                for(var i=0;i<50;i++){
                  if(data[i]==null){
                    break;
                  }
                  this.grievancetimes4.push(data[i]);
          
                };
        
              }
              let times=this.grievancetimes4.map(data=> data.timeDifference);
        
              
        
              times.forEach((data)=>{
                this.sum4=this.sum4+data;
              })
        
              this.avgResponseTime4=this.sum4/times.length;
              this.avgTimes.push(this.avgResponseTime4);


              console.log(this.avgResponseTime);

              this.chart = new Chart('canvas', {
                type: 'bar',
                data: {
                  labels: ['Production', 'Supply Chain Management', 'Ship Repair Business', 'Project and Engineering', 'Finance'],
                  datasets: [
                    {
                      label:'Average Grievance Response Time in Days',
                      data: this.avgTimes,
                      borderColor: '#3cba9f',
           
                    },
                    
                  ]
                }

                
              })

              
        
                  
            })
      
                
          })
      
    
              
        })
    
  
            
      })
  

          
    })


    

    

    

    
    







  }

}
