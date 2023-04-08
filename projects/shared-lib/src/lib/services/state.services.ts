import { Injectable } from '@angular/core';

import { environment } from 'projects/store/src/environments/environment';
// import { environment } from 'projects/digital-store/src/environments/environment';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  isLoading:Boolean=false;
  constructor() {}

  isSidebarCollapsed: boolean = false;

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
  loggedInEin = 1001;
  loggedInrole = environment.roles.customer;

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
