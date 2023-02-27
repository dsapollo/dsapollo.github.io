import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingpageComponent } from './components/admin-landingpage/admin-landingpage.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  
  {
    path: 'AdminLandingpageComponent',
    component: AdminLandingpageComponent,
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule {}