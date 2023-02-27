import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './components/create-report/create-report.component';
import { DownloadreportComponent } from './components/downloadreport/downloadreport.component';
import { ReportLandingComponent } from './components/report-landing/report-landing.component';
import { ReportComponent } from './components/report/report.component';
import { ViewreportComponent } from './components/viewreport/viewreport.component';






const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
  },

  {
    path: 'createreport',
    component: CreateReportComponent,
  },

  {
    path: 'viewreport/:reportId',
    component: ViewreportComponent,
  },
  {
    path: 'downloadreport',
    component: DownloadreportComponent,
  },
 
 
  {
    path: 'Report-landing',
    component: ReportLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ReportRoutingModule {}