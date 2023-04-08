import { RouterModule, Routes } from "@angular/router";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { NgModule } from "@angular/core";





const routes:Routes=[
    {
        path:'',
        component:InventoryComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InventoryRoutingModule {}