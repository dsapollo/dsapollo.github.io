import { NgModule } from '@angular/core';
import {loadRemoteModule} from '@angular-architects/module-federation'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/internal/store-landing/components/home/home.component';
import { ServiceLandingComponent } from './modules/internal/store-landing/components/service-landing/service-landing.component';
import { SystemErrorComponent } from './modules/internal/shared/components/error/system-error/system-error.component';
import { UnauthorizedComponent } from './modules/internal/shared/components/error/unauthorized/unauthorized.component';
import { PageMaintenanceComponent } from './modules/internal/shared/components/error/page-maintenance/page-maintenance.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { DigitalStoreLandingComponent } from './modules/internal/store-landing/components/digital-store-landing/digital-store-landing.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
      path: 'service-management',
      component: ServiceLandingComponent,
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: "https://dsapollo.github.io//remoteEntry.js",
          exposedModule: './ServiceManagementModule',
        }).then((m) => m.ServiceManagementModule),

    },
    {
      path: 'order-management',
      component: DigitalStoreLandingComponent,
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: "https://dsapollo.github.io//remoteEntry.js",
          exposedModule: './AppStoreLandingModule',
        }).then((m) => m.AppStoreLandingModule),
        
    },



  // {
  //   path:'order-management',
  //   component:HomeComponent,
  //   loadChildren:()=>
  //   loadRemoteModule({
  //     type:'module',
  //     exposedModule:'./'
  //   }).then((m) =>m.)
  // }
  // {
  //   path: 'service-management',
  //   component: ServiceLandingComponent,
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: environment.srRemoteUrl,
  //       exposedModule: './MystoreLandingModule',
  //     }).then((m) => m.MystoreLandingModule),
  // },
  

  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('projects/service-management/src/app/modules/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  

  {
    path: 'page-maintenance',
    component: PageMaintenanceComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: SystemErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
