import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment as env } from 'src/environments/environment';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../shared/interceptors/error.interceptor';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class GraphqlModule {
  private readonly DS_API_URI = env.dstoreApiUrl;
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
