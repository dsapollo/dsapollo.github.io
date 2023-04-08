import { NgModule } from "@angular/core";
import { UsermappingComponent } from "./components/usermapping/usermapping.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UsermappingRoutingModule } from "./usermapping-routing.module";
import { TesterMappingComponent } from "./components/usermapping/tester-mapping/tester-mapping.component";
import { ScheduleComponent } from "../schedule/components/schedule/schedule.component";
import { SchedulerMappingComponent } from "./components/usermapping/scheduler-mapping/scheduler-mapping.component";



@NgModule({
    declarations:[
        UsermappingComponent,
        TesterMappingComponent,
        SchedulerMappingComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        NgbModule,
        UsermappingRoutingModule
    ],
    providers:[],

})
export class UsermappingModule {}