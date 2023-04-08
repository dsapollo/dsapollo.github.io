import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  ErrorInterceptor, SharedLibModule, SpinnerInterceptor } from 'projects/shared-lib/src/public-api';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphqlModule } from './modules/internal/graphql/graphql.module';
import { SharedModule } from './modules/internal/shared/shared.module';
import { MsalModule } from './modules/providers/msal/msal.module';
import {  StorelandingModule } from "./modules/internal/store-landing/store-landing.module";
import { MsalInterceptorConfiguration, MsalGuardConfiguration, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService, MsalInterceptor, MsalService } from '@azure/msal-angular';
import { LogLevel, IPublicClientApplication, PublicClientApplication, BrowserCacheLocation, InteractionType } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { GraphqlHeaderInterceptor } from './modules/internal/shared/interceptors/graphql-header.interceptor';
//import { GraphqlHeaderInterceptor } from './modules/internal/shared/interceptors/graphql-header.interceptor';
//import { GraphqlHeaderInterceptor } from 'projects/service-management/src/app/modules/internal/shared/interceptors/graphql-header.interceptor';
//import { ErrorInterceptor } from 'projects/service-management/src/app/modules/internal/shared/interceptors/error.interceptor';

const isIE =
  window.navigator.userAgent.indexOf('MSIE') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export function loggerCallback(logLevel: LogLevel, message: String) {
  console.log(message);
}
export function MSALInstanceFactory(): IPublicClientApplication {
    return new PublicClientApplication({
      auth: {
        clientId: environment.auth.clientId,
        redirectUri: environment.auth.redirectUri,
        authority: environment.auth.authority,
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: isIE,
      },
      system: {
        loggerOptions: {
          loggerCallback,
          logLevel: LogLevel.Info,
          piiLoggingEnabled: false,
        },
      },
    });
  }
  export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
    const protectedResourceMap = new Map<string, Array<string>>();
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', [
      environment.auth.scope,
    ]);
  
    return {
      interactionType: InteractionType.Popup,
      protectedResourceMap,
    };
  }
  export function MSALGuardConfigFactory():MsalGuardConfiguration{
    return {
      interactionType:InteractionType.Popup,
      authRequest:{
        scopes:[environment.auth.scope],
      },
    };
  }
  


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        {
            provide: 'environment',
            useValue: environment
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MsalInterceptor,
            multi: true,
          },
          {
            provide: MSAL_GUARD_CONFIG,
            useFactory: MSALGuardConfigFactory,
          },
      
          {
            provide: HTTP_INTERCEPTORS,
            useClass: SpinnerInterceptor,
            multi: true,
          },
          {
            provide: MSAL_INSTANCE,
            useFactory: MSALInstanceFactory,
          },
          {
            provide: MSAL_INTERCEPTOR_CONFIG,
            useFactory: MSALInterceptorConfigFactory,
          },
          {
            provide: JWT_OPTIONS,
            useValue: JWT_OPTIONS,
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: GraphqlHeaderInterceptor,
            multi: true,
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
          },
          MsalService,
          JwtHelperService,
          MsalBroadcastService,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedLibModule,
        MsalModule,
        SharedModule,
        GraphqlModule,
        StorelandingModule,
    ]
})
export class AppModule { }
