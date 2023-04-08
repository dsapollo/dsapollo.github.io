import { Injectable } from '@angular/core';
const ServiceManagementBasePath='/service-management';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagementLinkService {

  routes: any = [
    {
      path: [ServiceManagementBasePath+'/dashboard'],
      title: 'My Dashboard',
      icon: 'fas fa-tachometer-alt',
    
    },

  
    {
      path: [ServiceManagementBasePath+'/inventory'],
      title: 'My Inventory',
      icon: 'fas fa-book',
   
    },

    {
      path: [ServiceManagementBasePath+'/schedule'],
      title: 'Schedule',
      icon: 'far fa-calendar',
   
    },
  
    {
      path: [ServiceManagementBasePath+'/location'],
      title: 'Location',
      icon: 'fa fa-location-arrow',
     
    },
    {
      path: [ServiceManagementBasePath+'/ticket-management'],
      title: 'Tickets',
      icon: 'fa fa-user',
    
    },
  
    {
      path: [ServiceManagementBasePath+'/usermapping'],
      title: 'User_Mapping',
      icon: 'fas fa-user-plus',
 
    },

    {
      path: [ServiceManagementBasePath+'/reporting'],
      title: 'Report',
      icon: 'fa fa-folder-open',
 
    },

    {
      path: [ServiceManagementBasePath+'/admin-configuration'],
      title: 'Admin-Configuration',
      icon: 'fas fa-user',
    
    },
  ];

  constructor() { }


checkIsVisible(route:any){
return true;
}
}
