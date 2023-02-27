import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocationComponent } from "../location/components/location/location.component";
import { SharedModule } from "../shared/components/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminLandingpageComponent } from "./components/admin-landingpage/admin-landingpage.component";
import { AdminComponent } from "./components/admin/admin.component";




@NgModule({
    declarations: [
        AdminComponent,
        AdminLandingpageComponent,
       
      
    ],
    imports: [
        CommonModule,
        SharedModule,
    AdminRoutingModule,
      
    ],
    providers: [],
  })
  export class AdminModule {}
  