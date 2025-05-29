import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddSolutionComponent } from './add-solution/add-solution.component';
import { AgmAddSolComponent } from './agm-add-sol/agm-add-sol.component';
import { AgmGViewComponent } from './agm-g-view/agm-g-view.component';
import { AgmListComponent } from './agm-list/agm-list.component';
import { AvgChartComponent } from './avg-chart/avg-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateGrievanceComponent } from './create-grievance/create-grievance.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { GmAddSolComponent } from './gm-add-sol/gm-add-sol.component';
import { GmAgmResponseComponent } from './gm-agm-response/gm-agm-response.component';
import { GmGViewComponent } from './gm-g-view/gm-g-view.component';
import { GmListComponent } from './gm-list/gm-list.component';
import { GrievanceListComponent } from './grievance-list/grievance-list.component';
import { GrievanceViewComponent } from './grievance-view/grievance-view.component';
import { HomeComponent } from './home/home.component';
import { LineMChartsComponent } from './line-m-charts/line-m-charts.component';
import { LineMListComponent } from './line-m-list/line-m-list.component';
import { LineMViewComponent } from './line-m-view/line-m-view.component';
import { LineManagerSolComponent } from './line-manager-sol/line-manager-sol.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateGrievanceComponent } from './update-grievance/update-grievance.component';
import { UserGViewComponent } from './user-g-view/user-g-view.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'grievances', component: GrievanceListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'gm-agm-response/:id', component: GmAgmResponseComponent},
  {path: 'agm-g-view/:id', component: AgmGViewComponent},
  {path: 'gm-g-view/:id', component: GmGViewComponent},
  {path: 'user-view/:id', component: UserViewComponent},
  {path: 'user-g-view/:id', component: UserGViewComponent},
  {path: 'update-grievance/:id', component: UpdateGrievanceComponent},
  {path: 'grievance-view/:id', component: GrievanceViewComponent},
  {path: 'addSolution-view/:id', component: AddSolutionComponent},
  {path: 'agm-add-sol/:id', component: AgmAddSolComponent},
  {path: 'gm-add-sol/:id', component: GmAddSolComponent},
  {path: 'agm-list', component: AgmListComponent},
  {path: 'gm-list', component: GmListComponent},
  {path: 'line-m-list/:id', component: LineMListComponent},
  {path: 'line-m-view/:id', component: LineMViewComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'create-grievance/:id', component:CreateGrievanceComponent},
  {path:  '', redirectTo:'grievances', pathMatch: 'full'},
  {path:  'update-employee/:id', component:UpdateEmployeeComponent},
  {path:  'update-grievance/:id', component: UpdateGrievanceComponent},
  {path:  'line-manager-sol/:id', component: LineManagerSolComponent},
  {path:  'employee-details/:id', component: EmployeeDetailsComponent},
  {path:  'charts', component: ChartsComponent},
  {path:  'avg-chart', component: AvgChartComponent},
  {path:  'employee-profile/:id', component: EmployeeProfileComponent},
  {path:  'line-m-charts', component: LineMChartsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
