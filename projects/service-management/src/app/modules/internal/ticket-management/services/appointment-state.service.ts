import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentStateService {

  pageSize=20;
  isAdminPage =false;
  activeAppTab =5;
  activeAppointmentPage =1;

  constructor() { }


  getUnscheduledTaskList(clearExistinh =true){

  }

  getscheduledTaskList(clearExistinh =true){
    
  }

  getRescheduledTaskList(clearExistinh =true){
    
  }

  getCompletedTaskList(clearExistinh =true){
    
  }

  getEscalatedTaskList(clearExistinh =true){
    
  }
}


