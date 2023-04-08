import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './module/internal/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './module/internal/modules/app-store-landing/components/landing/landing.component';
import { AdminComponent } from './module/internal/modules/admin/components/admin/admin.component';



@NgModule({
    declarations: [
        AppComponent,
     
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
      

    ]
})
export class AppModule { }
