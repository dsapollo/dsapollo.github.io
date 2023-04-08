import { NgModule } from "@angular/core";
import { ServiceManagementHomeComponent } from "./components/service-management-home/service-management-home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ServiceManagementRoutingModule } from "./service-management-routing";





@NgModule({
    declarations:[ServiceManagementHomeComponent],
    imports:[CommonModule,SharedModule,ServiceManagementRoutingModule],
    bootstrap:[ServiceManagementHomeComponent],
})

export class ServiceManagementModule{}