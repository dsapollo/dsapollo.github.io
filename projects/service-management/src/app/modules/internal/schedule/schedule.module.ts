import { NgModule } from "@angular/core";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ScheduleRoutingModule } from "./schedule-routing.module";
import { TesterComponent } from "./components/schedule/tester/tester.component";
import { DayAppointmentComponent } from './components/schedule/tester/day-appointment/day-appointment.component';
import { MonthAppointnmentComponent } from './components/schedule/tester/month-appointnment/month-appointnment.component';
import { WeekAppointnmentComponent } from './components/schedule/tester/week-appointnment/week-appointnment.component';
import { ViewCancelApptModalComponent } from './components/schedule/tester/view-cancel-appt-modal/view-cancel-appt-modal.component';






@NgModule({
    declarations:[
        ScheduleComponent,
        TesterComponent,
        DayAppointmentComponent,
        MonthAppointnmentComponent,
        WeekAppointnmentComponent,
        ViewCancelApptModalComponent
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