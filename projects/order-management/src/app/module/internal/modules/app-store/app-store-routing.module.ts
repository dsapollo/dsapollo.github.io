import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
//import { PageNotFoundComponent } from "projects/service-management/src/app/modules/internal/shared/components/page-not-found/page-not-found.component";




const routes:Routes =[
   {
    path:'',
    pathMatch:'full'
   },
   {
    path:'admin',
    loadChildren:()=>
        import(
            'projects/order-management/src/app/module/internal/modules/admin/admin-module'
        ).then((m) =>m.AdminModule),  
   },
   {
    path:'product',
    loadChildren:()=>
        import(
            'projects/order-management/src/app/module/internal/modules/product/product-module'
        ).then((m) =>m.ProductModule),  
   },
//    {
//     path:'reporting',
//     loadChildren:()=>
//         import(
//             'projects/order-management/src/app/module/internal/modules/reporting/reporting-module'
//         ).then((m) =>m.ReportModule),  
//    },
   {
    path:'cart',
    loadChildren:()=>
        import(
            'projects/order-management/src/app/module/internal/modules/cart/cart-modules'
        ).then((m) =>m.CartModule),  
   },
// {
//     path:'**',
//     component:PageNotFoundComponent
// }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AppStoreRoutingModule{}
