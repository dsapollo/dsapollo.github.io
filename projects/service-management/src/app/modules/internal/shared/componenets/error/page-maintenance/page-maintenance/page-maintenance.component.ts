import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-maintenance',
  templateUrl: './page-maintenance.component.html',
  styleUrls: ['./page-maintenance.component.scss']
})
export class PageMaintenanceComponent implements OnInit {

  constructor(public stateService:StateService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.stateService.error);
    if(!this.stateService.error.isError){
      this.router.navigate(['/']);
    }
  }

}
