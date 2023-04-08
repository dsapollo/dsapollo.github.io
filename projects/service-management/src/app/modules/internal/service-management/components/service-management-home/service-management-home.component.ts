import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../shared/services/state.services';

@Component({
  selector: 'app-service-management-home',
  templateUrl: './service-management-home.component.html',
  styleUrls: ['./service-management-home.component.scss']
})
export class ServiceManagementHomeComponent implements OnInit {

  constructor(public stateService:StateService) { }

  ngOnInit(): void {
  }

}
