import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';
import { StateService } from '../../services/state.services';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAppLoaded=false;
  constructor(public sharedService:SharedLibService,public stateService:StateService,private authService: MsalService,) { }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  gotoTop(){
    this.sharedService.state.scrollToTop$.next(null);
    
  }

 

  setloginDisplay(){
    this. isAppLoaded =this.authService.instance.getAllAccounts().length >0;
  }

  checkIfUserAlreadyLoggedIn():boolean{
    return this.authService.instance.getAllAccounts().length >0;
  }

  setAuthValue(){
   this.stateService.logIn;
    this. isAppLoaded=true;
  }

  checkAuthentication(){
    if(this.checkIfUserAlreadyLoggedIn()){
      const accountInfo =this.authService.instance.getAllAccounts();
      let tokennobj =accountInfo[0].idTokenClaims
      this.authService.instance.setActiveAccount(accountInfo[0]);
      this.setloginDisplay();
    }
  }

}
