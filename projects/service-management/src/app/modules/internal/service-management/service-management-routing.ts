import { RouterModule, Routes } from "@angular/router";
import { ServiceManagementHomeComponent } from "./components/service-management-home/service-management-home.component";
import { PageMaintenanceComponent } from "../shared/componenets/error/page-maintenance/page-maintenance/page-maintenance.component";
import { PageNotFoundComponent } from "../shared/componenets/error/page-not-found/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";



const routes:Routes=[
    {
        path:'',
        component:ServiceManagementHomeComponent,
        children:[
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full'
            },
            {
                path:'inventory',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/inventory/inventory-module'
                ).then((m)=>m.InventoryModule),
            },
            {
                path:'location',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/location/location-module'
                ).then((m)=>m.LocationModule),
            },
            {
                path:'reporting',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/reporting/reporting-module'
                ).then((m)=>m.ReportingModule),
            },
            {
                path:'schedule',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/schedule/schedule.module'
                ).then((m)=>m.ScheduleModule),
            },
            {
                path:'ticket-management',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/ticket-management/ticket-management-module'
                ).then((m)=>m.SrModule),
            },
            {
                path:'usermapping',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/usermapping/usermapping-module'
                ).then((m)=>m.UsermappingModule),
            },
            {
                path:'dashboard',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/dashboard/dashboard-module'
                ).then((m)=>m.DashBoardModule),
            },
            {
                path:'admin-configuration',
                loadChildren:() =>
                import(
                    'projects/service-management/src/app/modules/internal/admin-configuration/admin-configuration-module'
                ).then((m)=>m.AdminConfigurationModule),
            },
            {
                path:'page-maintenance',
                component:PageMaintenanceComponent,
            },
            {
                path:'**',
                component:PageNotFoundComponent,
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class ServiceManagementRoutingModule {}