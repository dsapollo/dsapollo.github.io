import { RouterModule, Routes } from "@angular/router";
import { LocationComponent } from "./components/location/location.component";
import { CreatelocationComponent } from "./components/createlocation/createlocation.component";
import { LocationDetailComponent } from "./components/location-detail/location-detail.component";
import { NgModule } from "@angular/core";





const routes:Routes=[
    {
        path:'',
        component:LocationComponent
    },
    {
        path:'create',
        component:CreatelocationComponent
    },
    {
        path:'viewlocation',
        component:LocationDetailComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],

})
export class LocationRoutingModule {}