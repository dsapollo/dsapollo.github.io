import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ReportComponent } from "./components/report/report.component";



const routes:Routes =[
    {
        path:'',
        component:ReportComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ReportingRoutingModule {}