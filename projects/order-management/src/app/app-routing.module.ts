import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PageNotFoundComponent } from 'projects/service-management/src/app/modules/internal/shared/components/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from 'projects/store/src/app/modules/internal/shared/components/error/unauthorized/unauthorized.component';



 export const routes: Routes = [
{
  path:'',
  redirectTo:'order-management',
  pathMatch:'full',
  
},
{
  path:'order-management',
  loadChildren:() =>
    import
    (
      'projects/order-management/src/app/module/internal/modules/app-store/app-store-module'
    ).then((m) =>m.AppStoreModule)
  },

  {
    path:'order-management',
    loadChildren:() =>
      import
      (
        'projects/order-management/src/app/module/internal/modules/app-store/app-store-module'
      ).then((m) =>m.AppStoreModule)
    },

   
  


  
  
  {
    path:'unauthorized',
    component:UnauthorizedComponent
    

  },
  //  {
  //   path:'**',
  //   component:PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
