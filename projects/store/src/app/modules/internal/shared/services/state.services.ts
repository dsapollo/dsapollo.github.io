import { Inject, Injectable } from '@angular/core';
import { Environment } from 'projects/shared-lib/src/lib/models/shared.model';
import { environment } from 'projects/store/src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class StateService {
  environment:Environment;
  
  constructor(@Inject('environment')environment:Environment) {
    this.environment=environment;
  }

  isSidebarCollapsed: boolean = false;
  isLoading:Boolean=false;

  state: {
    accessToken: string;
    loggedIn: boolean;
  } = {
    accessToken: '',
    loggedIn: false,
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

}
