import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { environment as env } from 'src/environments/environment';
import {
  Breakpoints,
  ScreenResizeService,
} from '../../services/screen-resize.service';
import { StateService } from '../../services/state.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  routes: any = [
    {
      path: ['/dashboard'],
      title: 'My Dashboard',
      icon: 'fas fa-tachometer-alt',
      visiblefor: [env.roles.admin, env.roles.customerCare, env.roles.customer],
    },
    {
      path: ['/order'],
      title: 'Order',
      icon: 'fa fa-shopping-cart',
      visiblefor: [env.roles.customer],
    },
    {
      path: ['/myorder'],
      title: 'My Orders',
      icon: 'fa fa-shopping-bag',
      visiblefor: [env.roles.customer],
    },

    {
      path: ['/location'],
      title: 'Location',
      icon: 'fa fa-location-arrow',
      visiblefor: [env.roles.customer],
    },

    {
      path: ['/report'],
      title: 'Report',
      icon: 'fa fa-folder-open',
      visiblefor: [env.roles.customer],
    },

    {
      path: ['/admin'],
      title: 'Admin',
      icon: 'fas fa-user',
      visiblefor: [env.roles.customer],
    },
  ];

  isMobile: boolean = false;

  apiResponse?: string;

  constructor(
    private stateService: StateService,
    private screenSizeService: ScreenResizeService,
    private authService: MsalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.isMobile = this.screenSizeService.screenWidth <= Breakpoints.LG;

    if (this.isMobile) {
      this.stateService.closeSidebar();
    }

    this.screenSizeService.getScreenSize()?.subscribe({
      next: (value) => {
        this.isMobile = value.width <= Breakpoints.LG;
      },
    });
  }

  public get isCollapsed(): boolean {
    return this.stateService.isSidebarCollapsed;
  }

  toggleSidebar() {
    this.stateService.toggleSidebar();
  }

  token() {
    this.http.get('https://graph.microsoft.com/v1.0/me').subscribe((resp) => {
      this.apiResponse = JSON.stringify(resp);
    });
  }

  handleRouteClick() {
    if (this.isMobile) {
      this.stateService.closeSidebar();
    }
  }

  isRouteVisible(route: any) {
    return route?.visiblefor?.includes(this.stateService.loggedInrole);
  }
}
