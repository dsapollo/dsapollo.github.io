import { NgModule } from "@angular/core";
import { AdminComponent } from "./components/admin/admin.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AdminConfigurationRoutingModule } from "./admin-configuration-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";




@NgModule({
    declarations:[
        AdminComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        NgbModule,
        AdminConfigurationRoutingModule
    ],
    providers:[]

})
export class AdminConfigurationModule{}