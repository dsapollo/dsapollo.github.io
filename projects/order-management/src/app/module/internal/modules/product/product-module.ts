import { NgModule } from "@angular/core";
import { ProductComponent } from "./components/product/product.component";
import { CommonModule } from "@angular/common";
import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "../../shared/shared.module";





@NgModule({
    declarations:[ProductComponent],
    imports:[CommonModule,ProductRoutingModule,SharedModule]

})
export class ProductModule{}