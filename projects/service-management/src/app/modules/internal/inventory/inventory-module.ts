import { NgModule } from "@angular/core";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InventoryRoutingModule } from "./inventory-routing.module";





@NgModule({
    declarations:[
        InventoryComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule,
        NgbModule,
        InventoryRoutingModule

    ],
    providers:[]
})
export class InventoryModule {}