import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MsalService } from '@azure/msal-angular';
import { BnNgIdleService } from 'bn-ng-idle';

import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { StateService } from '../../../services/state.services';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private stateService: StateService,
    private http: HttpClient,
    private authService: MsalService,
    private cookieservice: CookieService,
    private toast: ToastrService,
    private bnIdle: BnNgIdleService
  ) {}

  apiResponse?: String;
  name?: String;
  getActiveAccount: any;
  userDetails: any;

  ngOnInit(): void {
    this.bnIdle.startWatching(3590).subscribe((isTimedOut: Boolean) => {
      if (isTimedOut) {
        this.toast.error(
          'Oops! Token got expired please login again to use service..'
        );
        this.bnIdle.stopTimer();
      }
    });
    this.authService.instance.handleRedirectPromise().then((res) => {
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account);
      }
    });
    this.callProfile();
  }

  callProfile() {
    this.http.get('https://graph.microsoft.com/v1.0/me').subscribe((resp) => {
      localStorage.setItem(
        'userDetails',
        (this.apiResponse = JSON.stringify(resp))
      );
      this.apiResponse = JSON.stringify(resp);

      console.log('user', (this.apiResponse = JSON.stringify(resp)));
    });
  }

  // getName(): string {
  //   if (this.authService.instance.getActiveAccount() == null) {
  //     return 'unknown';
  //   }

  //   return this.authService.instance.getActiveAccount()?.name?
  // }

  logout() {
    this.cookieservice.removeAll;
    this.toast.success('Log-out Sucessfully');
    localStorage.removeItem('token');
    this.authService.logout();
  }
}
