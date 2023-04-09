
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { NgModule } from "@angular/core";
import { AppStoreLandingRoutingModule } from "./app-store-landing-routing.modules";
import { FormsModule } from "@angular/forms";
import { LandingComponent } from "./components/landing/landing.component";







@NgModule({
    declarations:[LandingComponent],
    imports:[CommonModule,SharedModule,AppStoreLandingRoutingModule,FormsModule]
})

export class AppStoreLandingModule{}