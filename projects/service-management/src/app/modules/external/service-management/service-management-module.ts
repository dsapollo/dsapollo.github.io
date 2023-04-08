import { NgModule } from "@angular/core";
import { ServiceManagementHomeComponent } from "./service-management-home/service-management-home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../internal/shared/shared.module";
import { ServiceManagementRoutingModule } from "./service-management-routing";
import { SharedLibModule } from "shared-lib";




@NgModule({
    declarations:[ServiceManagementHomeComponent],
    imports:[CommonModule,SharedModule,ServiceManagementRoutingModule,SharedLibModule],
    bootstrap:[ServiceManagementHomeComponent],
})
export class ServiceManagementModule{}