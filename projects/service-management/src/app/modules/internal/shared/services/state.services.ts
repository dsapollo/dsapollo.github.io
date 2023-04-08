import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'projects/service-management/src/environments/environment';
import { Environment, ServiceManagementEnv } from 'projects/shared-lib/src/lib/models/shared.model';


@Injectable({
  providedIn: 'root',
})
export class StateService {
  isLoading:Boolean=false;
  environment:ServiceManagementEnv;
  isSidebar:boolean=false;

  constructor(private http:HttpClient,@Inject('environment') environment:Environment){
    this.environment=environment.serviceManagement;
  }
  
  isSidebarCollapsed: boolean = false;

  state: {
    accessToken: string;
    loggedIn: boolean;
    userDetail:any |null;
  } = {
    accessToken: '',
    loggedIn: false,
    userDetail:null,
  };
  logIn(token: string) {
    this.state.loggedIn = true;
    this.state.accessToken = token;
    console.log('HttpToken',this.state.accessToken)
  }

  setLoading(loading:boolean){
    this.isLoading=loading;
  }

  error = {
    isError: false,
    message: '',
  };


  setError(message: string | null) {
    if (message) 
      this.error = {
        isError: true,
        message,
      };
     else 
      this.error = {
        isError: false,
        message: '',
      };
    
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  closeSidebar() {
    this.isSidebarCollapsed = true;
  }

  accessToken(){
localStorage.getItem('tkn');
  }
 
}
