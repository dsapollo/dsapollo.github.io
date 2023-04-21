import { Component, OnInit, ViewChild } from '@angular/core';
import { DayAppointmentComponent } from './day-appointment/day-appointment.component';
import { WeekAppointnmentComponent } from './week-appointnment/week-appointnment.component';
import { MonthAppointnmentComponent } from './month-appointnment/month-appointnment.component';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { parseOutputDate } from '../../../../shared/utilities/function';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss'],
  host:{
    class:'page-content-router',
  },
})
export class TesterComponent implements OnInit {
  breadcrumbs:{path?:string; text:string} [] =[{text:'Schedule'}];

  appCaledarType ='day';
  @ViewChild('dp') dp!:any;
  @ViewChild('dayWorkload') dayWorkload?:DayAppointmentComponent;
  @ViewChild('weekWorkload') weekWorkload?:WeekAppointnmentComponent;
  @ViewChild('monthWorkload') monthWorkload?:MonthAppointnmentComponent;

  model!:NgbDateStruct;
  date!:{year:number; month:number};

  hoverDate:NgbDate |null =null;
  
  fromDate?:NgbDate;
  toDate:NgbDate |null =null;

  weekends=[6,7];


  constructor() { }

  ngOnInit(): void {
  }

  onContainerScroll(event:any){
    
  }

  get currentDate(){
    if(this.appCaledarType ==='day')
    return parseOutputDate(this.model as NgbDate, 'DD MMMM, YYYY');
    if(this.appCaledarType ==='week')
    return `${parseOutputDate(this.fromDate!,'DD')} -${parseOutputDate(
      this.toDate!,
      'DD MMMM, YYYY'
    )}`;

    return parseOutputDate(this.model as NgbDate, 'MMM,YYYY');
  }

  get currentDay(){
    return parseOutputDate(this.model as NgbDate, 'ddd');
  }

  setMonthViewSelection(date:NgbDate){
    // const dateInMoment =moment({
    //   date:date.day,
    //   month:date.month -1,
    //   year:date.year,
    // });
    // this.s
  }

  handleChangeInSchedule(value:any){
    this.appCaledarType=value;
    // if(value === 'day'){
    //   this.s
    // }
  }

  showPrevious(){

  }

  showNext(){
    
  }

}


