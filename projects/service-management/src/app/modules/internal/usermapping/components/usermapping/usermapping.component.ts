import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { TesterMappingComponent } from './tester-mapping/tester-mapping.component';
import { ScheduleComponent } from '../../../schedule/components/schedule/schedule.component';

@Component({
  selector: 'app-usermapping',
  templateUrl: './usermapping.component.html',
  styleUrls: ['./usermapping.component.scss'],
  host:{
    class:'page-content-router',
  },
})
export class UsermappingComponent implements OnInit {

  breadcrumbs:{path?:string; text:string} [] =[{text:'User Mapping'}];
  @ViewChild('testerSelected')
  testerSelected!:TesterMappingComponent;
  @ViewChild('schedulerSelected')
  schedulerSelected!:ScheduleComponent;
  activeId:any=1;
  searchData:any;
  checked:boolean=false;

  constructor(private changeDetector:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadSchedulerTesterData();
  }

  toggleNotAssigned(event:any){
    this.checked=event.target.checked;
    this.loadSchedulerTesterData();
  }

  loadSchedulerTesterData(){
    this.changeDetector.detectChanges();
    // if(this.activeId ==1){
    //   this.testerSelected.handleNotAssignedEvent(this.checked);
    // }else{
    //   this.schedulerSelected.handleNotAssignedEvent(this.checked);
    // }
  }

  handleChange(event:number){
    this.activeId=event;
    this.loadSchedulerTesterData();
  }

  testermapping(){
    this.activeId=1;
  }

  schedulermapping(){
    this.activeId=2;
  }
}
