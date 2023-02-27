import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from './modules/shared/components/shared.module';
import { NgConfirmModule } from 'ng-confirm-box';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloModule } from 'apollo-angular';
import { BnNgIdleService } from 'bn-ng-idle';
import { CookieModule } from 'ngx-cookie';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { LoginComponent } from './modules/login/login.component';
import { DownloadreportComponent } from './modules/report/components/downloadreport/downloadreport.component';
import { EditreportComponent } from './modules/report/components/editreport/editreport.component';
import { NgToastModule } from 'ng-angular-popup';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalGuardConfiguration,
  MsalInterceptor,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalService,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { GraphqlHeaderInterceptor } from './modules/shared/interceptors/graphql-header.interceptor';
import { GraphqlInterceptor } from './modules/shared/interceptors/graphql.interceptor';
import { ErrorInterceptor } from './modules/shared/interceptors/error.interceptor';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

const isIE =
  window.navigator.userAgent.indexOf('MSIE') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export function loggerCallback(logLevel: LogLevel, message: String) {
  console.log(message);
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.clientId,
      redirectUri: environment.redirectUri,
      authority: environment.authority,
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
    'user.read',
  ]);

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DownloadreportComponent,
    EditreportComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MsalModule,
    HttpClientModule,
    ApolloModule,
    ReactiveFormsModule,
    CookieModule.withOptions(),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    GraphqlModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-top-right',
    }),
    NgConfirmModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
  ],

  providers: [
    BnNgIdleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
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

  bootstrap: [AppComponent],
})
export class AppModule {}
