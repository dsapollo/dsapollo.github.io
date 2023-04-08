import { NgModule } from "@angular/core";
import { SrComponent } from "./components/sr/sr.component";
import { ConfirmModalComponent } from "../shared/componenets/confirm-modal/confirm-modal/confirm-modal.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SrRoutingModule } from "./ticket-management-routing.module";

import { AppointmentsComponent } from "./components/sr/admin/appointments/appointments.component";
import { CancelAppointmentComponent } from "./components/sr/admin/appointments/cancel-appointment/cancel-appointment.component";
import { CompletedComponent } from "./components/sr/admin/appointments/completed/completed.component";
import { EscalatedComponent } from "./components/sr/admin/appointments/escalated/escalated.component";
import { RescheduleComponent } from "./components/sr/admin/appointments/reschedule/reschedule.component";
import { ScheduledComponent } from "./components/sr/admin/appointments/scheduled/scheduled.component";
import { UnscheduledComponent } from "./components/sr/admin/appointments/unscheduled/unscheduled.component";
import { ServiceRequestsComponent } from "./components/sr/admin/service-requests/service-requests.component";
import { AllServiceRequestComponent } from "./components/sr/admin/service-requests/all-service-request/all-service-request.component";
import { ClosedServiceRequestComponent } from "./components/sr/admin/service-requests/closed-service-request/closed-service-request.component";
import { InProgressComponent } from "./components/sr/admin/service-requests/in-progress/in-progress.component";
import { NewServiceRequestComponent } from "./components/sr/admin/service-requests/new-service-request/new-service-request.component";
import { AdminComponent } from "./components/sr/admin/admin.component";
import { CreateTaskSrComponent } from "./components/sr/admin/service-requests/create-task-sr/create-task-sr.component";
import {NgSelectModule} from '@ng-select/ng-select';




@NgModule({
    declarations:[
        SrComponent,
    AppointmentsComponent,
    ServiceRequestsComponent,
    CompletedComponent,
    AdminComponent,
    CreateTaskSrComponent,
    EscalatedComponent,
    RescheduleComponent,
    UnscheduledComponent,
    ScheduledComponent,
    CancelAppointmentComponent,
    AllServiceRequestComponent,
    ClosedServiceRequestComponent,
    InProgressComponent,
    NewServiceRequestComponent,

    ],
    imports:[
       CommonModule,
       FormsModule,
       SharedModule,
       ReactiveFormsModule,
       NgbModule,
       SrRoutingModule,
       NgSelectModule
       
    ],
    providers:[]
})
export class SrModule {}