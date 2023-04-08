import { Component, OnInit, ViewChild } from '@angular/core';
import { UnscheduledComponent } from './unscheduled/unscheduled.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { CompletedComponent } from './completed/completed.component';
import { EscalatedComponent } from './escalated/escalated.component';
import { AppointmentStateService } from '../../../../services/appointment-state.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  @ViewChild('unscheduled') unscheduled!:UnscheduledComponent;
  @ViewChild('scheduled') scheduled!: ScheduledComponent;
  @ViewChild('reschedule') reschedule!:RescheduleComponent;
  @ViewChild('completd') completed!:CompletedComponent;
  @ViewChild('escalated') escalated!:EscalatedComponent;

activeAppTab=5;
activeAppointmentPage=1;


  constructor(public appointmentState:AppointmentStateService) { }

  ngOnInit(): void {
  }

  onTabChange(value:any){
    this.activeAppointmentPage =+value;
    this.activeAppTab=this.activeAppointmentPage;

    if(this.activeAppointmentPage ===1)
this.appointmentState.getRescheduledTaskList();
    else if (this.activeAppointmentPage ===2)
    this.appointmentState.getscheduledTaskList();
    else if (this.activeAppointmentPage ===3)
    this.appointmentState.getRescheduledTaskList();
    else if (this.activeAppointmentPage ===4)
    this.appointmentState.getCompletedTaskList();
    else if (this.activeAppointmentPage ===5){
    this.appointmentState.getEscalatedTaskList();
    }

  }

  handleInfoClick(event:any){
    event.stopPropagation();
    event.preventDefault();

  }

}
