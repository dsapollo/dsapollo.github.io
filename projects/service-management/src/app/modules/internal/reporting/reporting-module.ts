import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReportComponent } from "./components/report/report.component";
import { ReportingRoutingModule } from "./reporting-routing.module";





@NgModule({
    declarations:[
       ReportComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        NgbModule,
        ReportingRoutingModule
        
    ],
    providers:[],
})
export class ReportingModule{}