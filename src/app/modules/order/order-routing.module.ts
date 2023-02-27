import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderLandingComponent } from './component/order-landing/order-landing.component';
import { OrderComponent } from './component/order/order.component';




const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
 
 
  {
    path: 'orderlanding',
    component: OrderLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class OrderRoutingModule {}