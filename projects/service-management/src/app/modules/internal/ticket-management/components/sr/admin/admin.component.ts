import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { AppointmentsComponent } from './appointments/appointments.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('serviceRequest') serviceRequest?:ServiceRequestsComponent;
  @ViewChild('appointment') appointment?:AppointmentsComponent;

  @Input('isPageVisible') isPageVisible =true;
  @Output() onTabChange =new EventEmitter<any>();

  activePage=2;

  constructor() { }

  ngOnInit(): void {
  }

  activeTabs=[
    {
      id:2,
      value:'Appointment',
    },
    {
      id:1,
      value:'Service-Request',
    }
  ];

  onChange(value:any){
    this.activePage =+value;
    this.onTabChange.emit(this.activePage);
  }

}
