import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MsalService } from '@azure/msal-angular';
import { BnNgIdleService } from 'bn-ng-idle';


import { ToastrService } from 'ngx-toastr';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
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
    
    private toast: ToastrService,
   
    private auth: AuthService
  ) {}


  user:User=new User();
  apiResponse?: String;
  name?: String;
  getActiveAccount: any;


  ngOnInit(): void {
   
    this.authService.instance.handleRedirectPromise().then((res) => {
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account);
      }
    });
    this.callProfile();
    this.getuser();

  }

  callProfile() {
    this.http.get('https://graph.microsoft.com/v1.0/me').subscribe((resp) => {
      this.apiResponse = JSON.stringify(resp);
    });
  }

  getuser() {
    const loggedinEmail = this.authService.instance.getActiveAccount()?.username;
    if (loggedinEmail) {
      this.userService.findUserByEmail(loggedinEmail).subscribe((res) => {
        this.user = res.data.findByEmail;
       
      });
    }
  }



  logout() {
    
    this.toast.success('Log-out Sucessfully', 'Msal-Logout');
    localStorage.removeItem;
    this.authService.logoutPopup({
      mainWindowRedirectUri:'/'
    });
  }
}
