import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageMaintenanceComponent } from './modules/internal/shared/componenets/error/page-maintenance/page-maintenance/page-maintenance.component';
import { PageNotFoundComponent } from './modules/internal/shared/componenets/error/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'service-management',
    pathMatch:'full',
  },
  {
    path:'service-management',
    loadChildren:() =>
    import(
      'projects/service-management/src/app/modules/internal/service-management/service-management-module'
    ).then((m)=>m.ServiceManagementModule),

  },
  {
    path:'page-maintenance',
    component:PageMaintenanceComponent
  },
  {
    path:'**',
    pathMatch:'full',
    component:PageNotFoundComponent
  },


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
