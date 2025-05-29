import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilterService } from '../filter.service';

@Component({
  selector: 'app-agm-list',
  templateUrl: './agm-list.component.html',
  styleUrls: ['./agm-list.component.css']
})
export class AgmListComponent implements OnInit {
  objects:Object[][];

  constructor(private agmService: FilterService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAgmTable();
   setTimeout(()=>{
     this.ngOnInit()

   },1000*2)
    
  }

  getAgmTable(){
    this.agmService.getagmTable().subscribe(data => {
      this.objects=data;

    })
  }

  viewG(id:Object){
    this.router.navigate(['agm-g-view', id.toString()])
  }

  goToComment(id:Object){
    this.router.navigate(['agm-add-sol', id.toString()])
  }

}
