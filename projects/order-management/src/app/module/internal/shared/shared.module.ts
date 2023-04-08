import { NgModule } from "@angular/core";

import { ConnectionErrorModal } from "projects/shared-lib/src/lib/components/modals/connection-error/connection-error.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NoDataFoundComponent } from "./components/error-page/no-data-found/no-data-found.component";
import { UnauthorizedComponent } from "./components/error-page/unauthorized/unauthorized.component";
import { PageMaintenanceComponent } from "./components/error-page/page-maintenance/page-maintenance.component";




@NgModule({
    declarations:[
        NoDataFoundComponent,
        UnauthorizedComponent,
        
      
       
    ],
    entryComponents:[
        ConnectionErrorModal,
        
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,

        
    ],
    exports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NoDataFoundComponent,
        UnauthorizedComponent,
        

    ],
})
export class SharedModule{}