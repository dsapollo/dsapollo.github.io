import { Component, OnInit } from '@angular/core';
import { AppointmentStateService } from '../../../../../services/appointment-state.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(public appointmentState:AppointmentStateService) { }

  ngOnInit(): void {
  }

  // onContainerScroll(){
  //   this
  // }

}
