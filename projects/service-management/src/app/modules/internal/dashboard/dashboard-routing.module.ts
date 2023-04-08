import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { Inject, NgModule } from "@angular/core";
import { Environment, ServiceManagementEnv } from "projects/shared-lib/src/lib/models/shared.model";






const routes:Routes=[

    {
        path:'',
        component:DashboardComponent
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class DashboardRouting{
    environment:ServiceManagementEnv;
    constructor(@Inject('environment')environment:Environment){
        this.environment=environment.serviceManagement;
    }
}