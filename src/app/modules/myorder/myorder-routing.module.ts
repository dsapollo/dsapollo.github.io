import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateorderComponent } from './component/createorder/createorder.component';
import { MyorderLandingComponent } from './component/myorder-landing/myorder-landing.component';
import { MyorderComponent } from './component/myorder/myorder.component';



const routes: Routes = [
  {
    path: '',
    component: MyorderComponent,
  },
  {
    path: 'createorder',
    component: CreateorderComponent,
  },
 
  {
    path: 'myorder-landing',
    component: MyorderLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MyorderRoutingModule {}