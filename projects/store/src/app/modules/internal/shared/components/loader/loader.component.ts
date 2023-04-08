import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.services';
import { ServiceManagementBasePath, SharedLibService, ThemeService } from 'shared-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private stateService:StateService,private sharedService:SharedLibService,private router:Router,public themeService:ThemeService) { }

  get isNavigationCollapsed(){
    return(
      this.router.url === '/' || this.router.url.includes(ServiceManagementBasePath) || this.stateService.isSidebarCollapsed
    );
  }
  ngOnInit(): void {
  }

  get isLoading(){
    return this.stateService.isLoading || this.stateService.isLoading;
  }

}
