import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MsalInterceptor, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { MSALInstanceFactory, MSALInterceptorConfigFactory } from 'projects/store/src/app/modules/providers/msal/msal.module';
import { environment } from 'projects/service-management/src/environments/environment';
import { ErrorInterceptor } from 'shared-lib';


@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: SpinnerInterceptor,
    //   multi: true,
    // },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
  ],
})
export class GraphqlModule {
  private readonly DS_API_URI = environment.dstoreApiUrl;
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.createDefault({
      cache: new InMemoryCache({
        addTypename: false,
      }),
      link: httpLink.create({
        uri: this.DS_API_URI,
      }),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
        },
        watchQuery: {
          fetchPolicy: 'no-cache',
        },
      },
    });
  }
}