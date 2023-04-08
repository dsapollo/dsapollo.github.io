import { RouterModule, Routes } from "@angular/router";
import { SrComponent } from "./components/sr/sr.component";
import { NgModule } from "@angular/core";






const routes:Routes=[
    {
        path:'',
        component:SrComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],

})
export class SrRoutingModule {}