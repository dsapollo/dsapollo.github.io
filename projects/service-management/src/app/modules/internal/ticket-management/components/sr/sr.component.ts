import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { AppointmentStateService } from '../../services/appointment-state.service';

@Component({
  selector: 'app-sr',
  templateUrl: './sr.component.html',
  styleUrls: ['./sr.component.scss'],
  host:{
    class:'page-content-router',
  },
})
export class SrComponent implements OnInit {

@ViewChild('srPage') adminPage!:AdminComponent;
  breadcrumbs:{path?:string; text:string}[]=[
    {text:'Ticket-Management'}
  ]

isAdmin=true;
activeAppTab=5;
activeSrTab=2;

  constructor(public appointmentState:AppointmentStateService) { }

  ngOnInit(): void {
  }

  @ViewChild('dropdown')
  monthPickerDropdown!:NgbDropdown;

  schedulers:any[]=[];
  isSchedulerSelected=true;
  selectedScheduler:any=null;

  testers:any[]=[];
  isTesterSelected=true;
  showTesterDropdown=true;
  showSchedulerDropdown=true;

 handleTesterChange(event:any){
  this.showTesterDropdown=false;
 }

 handleSchedulerChange(event:any){
  this.showSchedulerDropdown=false;
 }

//  onContainerScroll(event:any){
//   this.adminPage?.serviceRequest?.allServiceRequest?.onContainerScroll(
//     event
//   );
//   this.adminPage?.serviceRequest?.newSR?.onContainerScroll(event);
//   this.adminPage?.serviceRequest?.inProgressSR?.onContainerScroll(event);
//   this.adminPage?.serviceRequest?.closedSR?.onContainerScroll(event);

//   this.adminPage?.appointment?.escalated?.onContainerScroll(event);
//   this.adminPage?.appointment?.unscheduled?.onContainerScroll(event);
//   this.adminPage?.appointment?.scheduled?.onContainerScroll(event);
//   this.adminPage?.appointment?.reschedule?.onContainerScroll(event);
//   this.adminPage?.appointment?.completed?.onContainerScroll(event);
//  }


handleSchedulerClear(){
  this.isSchedulerSelected=false;
}


}
