import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrAdminStateService {

  pageSize=20;

  constructor() { }

  initalAppActiveTab='';

  getAllSRTaskList(clearExisting=true){

  }

  getCreateTaskList(clearExisting=true){
    
  }

  getInProgressSRTaskList(clearExisting=true){
    
  }

  getclosedSRTaskList(clearExisting=true){
    
  }

  getNewSRTaskList(clearExisting=true){
    
  }
}
