import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss'],
})
export class DashboardLandingComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'My DashBoard' }];

  name!: string;
  constructor(private authService: MsalService) {}

  ngOnInit(): void {}

  // getName () : string {
  //   if (this.authService.instance.getActiveAccount() == null) {
  //     return 'unknown'
  //   }

  //   return this.authService.instance?.getActiveAccount()?.name?
  // }
}
