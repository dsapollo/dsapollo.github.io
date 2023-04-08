import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Carousel, CarouselModule } from "primeng/carousel";
import { SharedLibModule } from "projects/shared-lib/src/public-api";
import { SharedModule } from "../shared/shared.module";
import { DigitalStoreLandingComponent } from "./components/digital-store-landing/digital-store-landing.component";
import { HomeComponent } from "./components/home/home.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ServiceLandingComponent } from "./components/service-landing/service-landing.component";
import { StoreLandingRoutingModule } from "./store-landing-routing.module";



@NgModule({
    declarations:[
        HomeComponent,
        LandingComponent,
        DigitalStoreLandingComponent,
        ServiceLandingComponent,
        LandingComponent
    ],
    imports:[
        CommonModule,
        StoreLandingRoutingModule,
        SharedLibModule,
        NgbModule,
        CarouselModule,
    ],
    exports:[HomeComponent],

})
export class StorelandingModule{}