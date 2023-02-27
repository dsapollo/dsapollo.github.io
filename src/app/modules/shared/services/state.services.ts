import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StateService {
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
  }

  error = {
    isError: false,
    message: '',
  };
  loggedInEin = 1001;
  loggedInrole = environment.roles.customer;

  setError(message: string | null) {
    if (message) {
      this.error = {
        isError: true,
        message,
      };
    } else {
      this.error = {
        isError: false,
        message: '',
      };
    }
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  closeSidebar() {
    this.isSidebarCollapsed = true;
  }
}
