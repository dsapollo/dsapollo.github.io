import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";
import { NgModule } from "@angular/core";





const routes:Routes =[
    {
        path:'',
        component:ProductComponent,
    }
];

@NgModule({
 imports:[RouterModule.forChild(routes)],
 exports:[RouterModule],
})
export class ProductRoutingModule{}