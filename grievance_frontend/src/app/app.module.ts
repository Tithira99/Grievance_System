import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { GrievanceListComponent } from './grievance-list/grievance-list.component';
import { CreateGrievanceComponent } from './create-grievance/create-grievance.component';
import { FormsModule } from '@angular/forms';
import { UpdateGrievanceComponent } from './update-grievance/update-grievance.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AgmListComponent } from './agm-list/agm-list.component';
import { GmListComponent } from './gm-list/gm-list.component';
import { LineMListComponent } from './line-m-list/line-m-list.component';
import { GrievanceViewComponent } from './grievance-view/grievance-view.component';
import { AddSolutionComponent } from './add-solution/add-solution.component';
import { GmAgmResponseComponent } from './gm-agm-response/gm-agm-response.component';
import { AgmGViewComponent } from './agm-g-view/agm-g-view.component';
import { GmGViewComponent } from './gm-g-view/gm-g-view.component';
import { AgmAddSolComponent } from './agm-add-sol/agm-add-sol.component';
import { GmAddSolComponent } from './gm-add-sol/gm-add-sol.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserGViewComponent } from './user-g-view/user-g-view.component';
import { LineMViewComponent } from './line-m-view/line-m-view.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LineManagerSolComponent } from './line-manager-sol/line-manager-sol.component';
import { LoginComponent } from './login/login.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { LineMChartsComponent } from './line-m-charts/line-m-charts.component';
import { AvgChartComponent } from './avg-chart/avg-chart.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component'





@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    GrievanceListComponent,
    CreateGrievanceComponent,
    UpdateGrievanceComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    AgmListComponent,
    GmListComponent,
    LineMListComponent,
    GrievanceViewComponent,
    AddSolutionComponent,
    GmAgmResponseComponent,
    AgmGViewComponent,
    GmGViewComponent,
    AgmAddSolComponent,
    GmAddSolComponent,
    UserViewComponent,
    UserGViewComponent,
    LineMViewComponent,
    AboutComponent,
    HomeComponent,
    LineManagerSolComponent,
    LoginComponent,
    ChartsComponent,
    LineMChartsComponent,
    AvgChartComponent,
    EmployeeProfileComponent
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
 

  
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
