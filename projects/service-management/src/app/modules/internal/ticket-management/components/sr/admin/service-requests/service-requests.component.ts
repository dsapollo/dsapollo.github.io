import { Component, OnInit, ViewChild } from '@angular/core';
import { AllServiceRequestComponent } from './all-service-request/all-service-request.component';
import { NewServiceRequestComponent } from './new-service-request/new-service-request.component';
import { CreateTaskSrComponent } from './create-task-sr/create-task-sr.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { ClosedServiceRequestComponent } from './closed-service-request/closed-service-request.component';
import { SrAdminStateService } from '../../../../services/sr-admin-state.service';

@Component({
  selector: 'app-service-requests',
  templateUrl: './service-requests.component.html',
  styleUrls: ['./service-requests.component.scss']
})
export class ServiceRequestsComponent implements OnInit {

  @ViewChild('allServiceRequest')
  allServiceRequest?:AllServiceRequestComponent;
  @ViewChild('newSR')
  newSR?:NewServiceRequestComponent;
  @ViewChild('createTaskSR')
  createTaskSR?:CreateTaskSrComponent;
  @ViewChild('inProgressSR')
  inProgressSR?:InProgressComponent;
  @ViewChild('closed')
  closedSR?:ClosedServiceRequestComponent;

  activeSRPage=1;

  activeTabs=[
    {
      id:1,
      value:'All SR',
      countKey:'allSRTotalCount',
    },
    {
      id:2,
      value:'New SR',
      countKey:'newSRTotalCount',
    },
    {
      id:3,
      value:'Create Task',
      countKey:'createTaskSRTotalCount',
    },
    {
      id:4,
      value:'In Progress',
      countKey:'inProgressSRTotalCount',
    },
    {
      id:5,
      value:'Closed SR',
      countKey:'closedSRTotalCount',
    },
  ];

  constructor(public srAdminState:SrAdminStateService) { }

  ngOnInit(): void {
  }

  get tabTitle(){
    const currentTab:any= this.activeTabs.find((tab)=> tab.id === this.activeSRPage) || null;

    return currentTab? `${currentTab.value} (${
      (this.srAdminState as any) [currentTab.countKey]
    })`
    :'';
  }

  onChange(value:any){
    this.activeSRPage=+value;
    this.getSRData();
  }


  getSRData(){
    if (this.activeSRPage ===1) this.srAdminState.getAllSRTaskList();
    else if (this.activeSRPage ===2) this.srAdminState.getNewSRTaskList();
    else if (this.activeSRPage ===3) this.srAdminState.getCreateTaskList();
    else if (this.activeSRPage ===4)
    this.srAdminState.getInProgressSRTaskList();
    else if(this.activeSRPage ===5) this.srAdminState.getclosedSRTaskList();
  }

  getServiceRequestData(){
    this.srAdminState.getAllSRTaskList(true);
    this.srAdminState.getCreateTaskList(true);
    this.srAdminState.getInProgressSRTaskList(true);
    this.srAdminState.getNewSRTaskList(true);
    this.srAdminState.getclosedSRTaskList(true);
  }
}
