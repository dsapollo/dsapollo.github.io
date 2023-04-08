import { Injectable } from '@angular/core';
import { environment } from 'projects/store/src/environments/environment';
import { StateService } from './state.services';


@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private stateService: StateService) {}

  isAdmin() {
    return this.stateService.loggedInrole === environment.roles.admin;
  }

  isCustomerCare() {
    return this.stateService.loggedInrole === environment.roles.customerCare;
  }

  isCustomer() {
    return this.stateService.loggedInrole === environment.roles.customer;
  }
}
