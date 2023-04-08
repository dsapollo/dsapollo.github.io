import { NgModule } from "@angular/core";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ScheduleRoutingModule } from "./schedule-routing.module";





@NgModule({
    declarations:[
        ScheduleComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule,
        NgbModule,
        ScheduleRoutingModule,
    ],
    providers:[]
})
export class ScheduleModule {}