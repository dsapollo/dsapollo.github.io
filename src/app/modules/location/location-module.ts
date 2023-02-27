import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/components/shared.module";

import { CreatelocationComponent } from "./components/createlocation/createlocation.component";
import { LocationLandingComponent } from "./components/location-landing/location-landing.component";
import { LocationComponent } from "./components/location/location.component";
import { ViewalllocationComponent } from "./components/viewalllocation/viewalllocation.component";
import { ViewlocationComponent } from "./components/viewlocation/viewlocation.component";
import { LocationRoutingModule } from "./location-routing.module";




@NgModule({
    declarations: [
        LocationComponent,
        LocationLandingComponent,
        CreatelocationComponent,
        ViewlocationComponent,
        ViewalllocationComponent
        

      
    ],
    imports: [
        CommonModule,
        SharedModule,
    LocationRoutingModule,
      
    ],
    providers: [],
  })
  export class LocationModule {}
  