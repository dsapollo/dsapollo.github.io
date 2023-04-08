import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { LandingComponent } from "./components/landing/landing.component";




const routes:Routes =[
    {
        path:'',
        component:LandingComponent,
        loadChildren:()=>
        import (
            'projects/order-management/src/app/module/internal/modules/app-store/app-store-module'
        ).then((m)=> m.AppStoreModule),
    }
   
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AppStoreLandingRoutingModule{}
