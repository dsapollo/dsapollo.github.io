import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/components/shared.module";
import { DashboardLandingComponent } from "./components/dashboard-landing/dashboard-landing.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";




@NgModule({
    declarations: [
        DashboardComponent,
        DashboardLandingComponent,
      
    ],
    imports: [
        CommonModule,
        SharedModule,
    DashboardRoutingModule,
      
    ],
    providers: [],
  })
  export class DashboardModule {}
  