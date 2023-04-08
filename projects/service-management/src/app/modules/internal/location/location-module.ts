import { NgModule } from "@angular/core";
import { LocationComponent } from "./components/location/location.component";
import { LocationDetailComponent } from "./components/location-detail/location-detail.component";
import { CreatelocationComponent } from "./components/createlocation/createlocation.component";
import { CommonModule } from "@angular/common";
import { LocationRoutingModule } from "./location-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";





@NgModule({
    declarations:[
        LocationComponent,
        LocationDetailComponent,
        CreatelocationComponent

    ],
    imports:[
        CommonModule,
        LocationRoutingModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    
})
export class LocationModule {}