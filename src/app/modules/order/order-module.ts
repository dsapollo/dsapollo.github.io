import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/components/shared.module';
import { OrderLandingComponent } from './component/order-landing/order-landing.component';
import { OrderComponent } from './component/order/order.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderComponent, OrderLandingComponent],
  imports: [CommonModule, SharedModule, OrderRoutingModule],
  providers: [],
})
export class orderModule {}
