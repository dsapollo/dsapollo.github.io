import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthenticationResult, SilentRequest } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';
import { merge, result } from 'lodash';
import { StateService } from '../services/state.services';
import { MsalService } from '@azure/msal-angular';

@Injectable()
export class GraphqlInterceptor implements HttpInterceptor {
  accessToken: any;
  login: boolean = false;
  // stateservice: any;
  // msalservice: any;
  // loggedIn: any;

  constructor(
    private jwtHelper: JwtHelperService,
    private msalservice: MsalService,
    private stateservice: StateService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isValidToken(this.stateservice.state.accessToken)) {
      let account = this.msalservice.instance.getAllAccounts()[0];
      this.msalservice.acquireTokenSilent;
      let silentRequest: SilentRequest = {
        account,
        scopes: [environment.scope],
        forceRefresh: false,
      };
      return this.msalservice.acquireTokenSilent(silentRequest).pipe(
        mergeMap((result: AuthenticationResult) => {
          this.stateservice.state.accessToken = result.accessToken;
          this.login = true;
          let customRequest = request;
          console.log('customRequest when token expired');
          customRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.stateservice.state.accessToken}`,
            },
          });
          return next.handle(customRequest);
        })
      );
    } else {
      let customRequest = request;
      console.log('customRequest when token not expired');
      customRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.stateservice.state.accessToken}`,
        },
      });
      return next.handle(customRequest);
    }
  }

  isValidToken(expToken: string) {
    let validTill = this.jwtHelper.getTokenExpirationDate(expToken);
    let newDate = new Date();
    if (validTill != null && validTill >= newDate) {
      return true;
    }
    return false;
  }
}
