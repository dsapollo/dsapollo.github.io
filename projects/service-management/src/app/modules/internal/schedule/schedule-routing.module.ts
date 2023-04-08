import { RouterModule, Routes } from "@angular/router";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { NgModule } from "@angular/core";




const routes:Routes =[
    {
path:'',
component:ScheduleComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class ScheduleRoutingModule{}