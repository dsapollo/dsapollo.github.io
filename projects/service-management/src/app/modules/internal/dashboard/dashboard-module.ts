import { NgModule } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { DashboardRouting } from "./dashboard-routing.module";
import { SharedModule } from "../shared/shared.module";
import { CarouselModule } from "primeng/carousel";



@NgModule({
    declarations:[
        DashboardComponent
    ],
    imports:[
        CommonModule,
        DashboardRouting,
        SharedModule,
        CarouselModule
    ],
})

export class DashBoardModule {}