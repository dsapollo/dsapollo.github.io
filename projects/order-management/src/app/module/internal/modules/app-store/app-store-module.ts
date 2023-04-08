
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { NgModule } from "@angular/core";
import { AppStoreRoutingModule } from "./app-store-routing.module";
import { SharedLibModule } from "shared-lib";
import { HttpClientModule } from "@angular/common/http";






@NgModule({
    declarations:[],
    imports:[CommonModule,SharedModule,AppStoreRoutingModule,SharedLibModule,HttpClientModule]
})

export class AppStoreModule{}