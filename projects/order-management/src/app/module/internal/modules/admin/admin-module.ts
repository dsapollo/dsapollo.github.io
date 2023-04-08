import { NgModule } from "@angular/core";
import { AdminComponent } from "./components/admin/admin.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";





@NgModule({
    declarations:[AdminComponent],
    imports:[CommonModule,SharedModule,AdminRoutingModule]
})

export class AdminModule{}