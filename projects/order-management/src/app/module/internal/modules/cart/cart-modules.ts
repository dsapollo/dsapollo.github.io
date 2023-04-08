import { NgModule } from "@angular/core";
import { CartComponent } from "./components/cart/cart.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { CartRoutingModule } from "./cart-routing.modules";




@NgModule({
    declarations:[CartComponent],
    imports:[CommonModule,SharedModule,CartRoutingModule]
})
export class CartModule{}