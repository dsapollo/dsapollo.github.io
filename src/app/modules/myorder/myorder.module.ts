import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/components/shared.module";
import { CreateorderComponent } from "./component/createorder/createorder.component";
import { MyorderLandingComponent } from "./component/myorder-landing/myorder-landing.component";
import { MyorderComponent } from "./component/myorder/myorder.component";
import { MyorderRoutingModule } from "./myorder-routing.module";
import { VieworderComponent } from './component/vieworder/vieworder.component';
import { ViewallorderComponent } from './component/viewallorder/viewallorder.component';






@NgModule({
    declarations: [
       CreateorderComponent,
      MyorderComponent,
      MyorderLandingComponent,
      VieworderComponent,
      ViewallorderComponent
      
    ],
    imports: [
        CommonModule,
        SharedModule,
    MyorderRoutingModule,
      
    ],
    providers: [],
  })
  export class myorderModule {}
  