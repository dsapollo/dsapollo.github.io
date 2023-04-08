import { RouterModule, Routes } from "@angular/router";
import { UsermappingComponent } from "./components/usermapping/usermapping.component";
import { NgModule } from "@angular/core";



const routes:Routes =[

    {
        path:'',
        component:UsermappingComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class UsermappingRoutingModule {}