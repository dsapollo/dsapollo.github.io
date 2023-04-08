import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import { MsalBroadcastService, MsalGuardConfiguration, MsalInterceptor, MsalInterceptorConfiguration, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from "@azure/msal-angular";
import { LogLevel, IPublicClientApplication, PublicClientApplication, BrowserCacheLocation, InteractionType } from "@azure/msal-browser";
import { environment } from "projects/store/src/environments/environment";
import { ErrorInterceptor } from "../../internal/shared/interceptors/error.interceptor";
import { GraphqlHeaderInterceptor } from "../../internal/shared/interceptors/graphql-header.interceptor";
import { SpinnerInterceptor } from "../../internal/shared/interceptors/spinner.interceptor";




@NgModule({
    declarations:[],

    providers:[
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
          // {
          //   provide: HTTP_INTERCEPTORS,
          //   useClass: GraphqlInterceptor,
          //   multi: true,
          // },
          MsalService,
          JwtHelperService,
          MsalBroadcastService,
    ],
    imports:[CommonModule]
})

export class MsalModule{}

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