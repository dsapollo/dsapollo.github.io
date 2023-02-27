import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  //canActivate: [MsalGuard]
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  // },
  // {
  //   path: 'order',
  //   component: OrderComponent,
  // },

  // {
  //   path: 'myorder',
  //   component: MyorderComponent,
  // },
  // {
  //   path: 'createorder',
  //   component: CreateorderComponent,
  // },
  // {
  //   path: 'location',
  //   component: LocationComponent,
  // },
  // {
  //   path: 'createlocation',
  //   component: CreatelocationComponent,
  // },
  // {
  //   path: 'report',
  //   component: ReportComponent,
  // },
  // {
  //   path: 'createreport',
  //   component: CreateReportComponent,
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  // },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('src/app/modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('src/app/modules/order/order-module').then((m) => m.orderModule),
  },

  {
    path: 'myorder',
    loadChildren: () =>
      import('src/app/modules/myorder/myorder.module').then(
        (m) => m.myorderModule
      ),
  },

  {
    path: 'createorder',
    loadChildren: () =>
      import('src/app/modules/myorder/myorder.module').then(
        (m) => m.myorderModule
      ),
  },

  {
    path: 'location',
    loadChildren: () =>
      import('src/app/modules/location/location-module').then(
        (m) => m.LocationModule
      ),
  },

  {
    path: 'createlocation',
    loadChildren: () =>
      import('src/app/modules/location/location-module').then(
        (m) => m.LocationModule
      ),
  },

  {
    path: 'report',
    loadChildren: () =>
      import('src/app/modules/report/report-module').then(
        (m) => m.ReportModule
      ),
  },

  {
    path: 'createreport',
    loadChildren: () =>
      import('src/app/modules/report/report-module').then(
        (m) => m.ReportModule
      ),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
