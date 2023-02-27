import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/components/shared.module";
import { CreateReportComponent } from "./components/create-report/create-report.component";

import { ReportLandingComponent } from "./components/report-landing/report-landing.component";
import { ReportComponent } from "./components/report/report.component";
import { ViewreportComponent } from "./components/viewreport/viewreport.component";

import { ReportRoutingModule } from "./report-routing.module";
import { ReactiveFormsModule } from "@angular/forms";




@NgModule({
    declarations: [
        ReportLandingComponent,
        ReportComponent,
        CreateReportComponent,
        ViewreportComponent,
        
       
      
    ],
    imports: [
        CommonModule,
        SharedModule,
    ReportRoutingModule,
    ReactiveFormsModule
      
    ],
    providers: [],
  })
export class ReportModule {}
  