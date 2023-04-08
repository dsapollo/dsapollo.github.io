import { Injectable } from '@angular/core';

import { StateService } from './state.services';
import { environment } from 'projects/service-management/src/environments/environment';


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
