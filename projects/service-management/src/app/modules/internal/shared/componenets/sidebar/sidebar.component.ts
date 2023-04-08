import { Component, OnInit } from '@angular/core';

import {
  Breakpoints,
  ScreenResizeService,
} from '../../services/screen-resize.service';
import { StateService } from '../../services/state.services';
import { ServiceManagementLinkService } from 'projects/shared-lib/src/lib/services/service-management-link.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  

  isMobile: boolean = false;

  

  constructor(
    private stateService: StateService,
    private screenSizeService: ScreenResizeService,
   public servicemanagement:ServiceManagementLinkService
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

 

  handleRouteClick() {
    if (this.isMobile) {
      this.stateService.closeSidebar();
    }
  }

  isRouteVisible(route: any) {
    return route?.visiblefor?.includes(this.stateService);
  }
}
