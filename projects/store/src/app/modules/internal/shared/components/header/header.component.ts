import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from 'projects/shared-lib/src/lib/models/shared.model';
import {
  OrderManagementBasePath,
  ServiceManagementBasePath,
} from 'projects/shared-lib/src/lib/utils/constants';
import { StateService } from '../../services/state.services';
import { StoreLandingService } from '../../services/store-landing.service';
import { ServiceManagementLinkService } from 'projects/shared-lib/src/lib/services/service-management-link.service';
import { ThemeService } from 'shared-lib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  public totalItem : number = 0;
servicemanagementTooltipMenu: any;
  
isStaRoute(): any {
throw new Error('Method not implemented.');
}
isPaRoute(): any {
throw new Error('Method not implemented.');
}
themeService: any;
fslNav: any;
isReporting:any;
OrderManagementBasePath: any|string;
favouritesService: any;
isAdmin:any=true;
isPreOrder:any=true;


authService: any;
isMystoreUser: any;
checkIsStaPaVisible(arg0: string): any {
throw new Error('Method not implemented.');
}
  environment: Environment;
  userDetails: any;
  servicemanagementUrl:any;
  isMobileMenuOpen = false;
  currentUrl = this.router.url;

  orderManagement = {
    isAdmin: false,
    
  };

  loggedInUser(){

  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  loggedInUser$() {
    this.orderManagement.isAdmin = true;
  }

  constructor(
    public stateService: StateService,
    private router: Router,
    public srLink:ServiceManagementLinkService,
 public themeservice:ThemeService,
    public storelandingService: StoreLandingService,
    @Inject('environment') environment: Environment
  ) {
    this.environment = environment;
    this.servicemanagementUrl=this.environment.serviceManagementUrl;
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event) => {
    //     this.isMobileMenuOpen = false;
    //     this.currentUrl = (event as RouterEvent)?.url || '';
    //   });
  }

  disableLandingInfo() {
    if (this.router.url !== '/')
      this.storelandingService.showLandingInfo = false;
  }

  isOrderManagementRoute() {
    return this.currentUrl.includes(OrderManagementBasePath);
  }

  isSrRoute() {
    return this.currentUrl.includes(ServiceManagementBasePath);
  }

  public get isCollapsed(): boolean {
    return this.stateService.isSidebarCollapsed;
  }

  toggleSidebar() {
    this.stateService.toggleSidebar();
  }

  isEsiTestUser(){

  }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.totalItem = res.length;
    // })
  }

  handlePropagation(event: any) {
    event.stopPropagation();
  }

  redirect1(){
   // window.location.href = "http://www.w3schools.com";
   // window.location.replace("http://www.w3schools.com");
   window.open("http://localhost:4400/service-managements/dashboard", "_blank");
  }

  redirect2(){
    // window.location.href = "http://www.w3schools.com";
    // window.location.replace("http://www.w3schools.com");
    window.open("http://localhost:4300", "_blank");
   }

  
}
