import { Component, OnInit } from '@angular/core';

import { GrievanceService } from '../grievance.service';

import { Chart, registerables} from 'chart.js';
import { GrievanceTime } from '../grievance-time';
import { EmployeeService } from '../employee.service';

Chart.register(...registerables);




@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
 

  chart={};
  sum:number=0;
  avgResponseTime:number;
  grievanceTime:Array<GrievanceTime>=[];

  constructor(private grievanceService:GrievanceService,
    private employeeService:EmployeeService) { }

   
  ngOnInit() {
    this.grievanceService.getGrievanceTime().subscribe(data=>{
      console.log(data);
      for(var i=0;i<50;i++){
        if(data[i]==null){
          break;
        }
        this.grievanceTime.push(data[i]);

      };
      console.log(this.grievanceTime);



      let times=this.grievanceTime.map(data=> data.timeDifference);
      let grievanceId=this.grievanceTime.map(data=> data.grievanceId1);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: grievanceId,
          datasets: [
            {
              label:'Grievance Response Time in Days',
              data: times,
              borderColor: '#3cba9f',
             
            },
            
          ]
        }

        
      })
     console.log(times);

     console.log(grievanceId);

     times.forEach((data)=>{
       this.sum=this.sum+data;
     })

     this.avgResponseTime=(this.sum/times.length);
     console.log( this.avgResponseTime);

    })



    


    






     
    
  


      
  }

}
