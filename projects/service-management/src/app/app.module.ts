import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedLibModule } from 'projects/shared-lib/src/public-api';

import { ReactiveFormsModule } from '@angular/forms';
import { MsalModule } from '@azure/msal-angular';

import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './modules/internal/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphqlModule } from './modules/internal/graphql/graphql.models';






@NgModule({
  declarations: [
    AppComponent,
   
    
  

   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedLibModule,
    AppRoutingModule,
    GraphqlModule,
    MsalModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-top-right',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
