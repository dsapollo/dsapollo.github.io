import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { NgModule } from "@angular/core";




const routes:Routes=[
    {
        path:'',
        component:AdminComponent,
    }

];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class AdminConfigurationRoutingModule{}