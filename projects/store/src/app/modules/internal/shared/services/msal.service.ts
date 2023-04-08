import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration,MsalService as MsService,MsalBroadcastService } from '@azure/msal-angular';
import { StateService } from 'projects/service-management/src/app/modules/internal/shared/services/state.services';
import { Environment } from 'projects/shared-lib/src/lib/models/shared.model';
import { SharedLibService, ThemeService } from 'shared-lib';
import { AuthenticationResult,RedirectRequest,SilentRequest } from '@azure/msal-browser';
import { result } from 'lodash';
import { UserService } from './user.service';
import { isADMIN } from '../utilities/function';

@Injectable({
  providedIn: 'root'
})
export class MsalService {
  loginDisplay =false;

  environment:Environment;
  isProfileLoading:boolean=true;

  constructor(public stateService:StateService,
    private themeService:ThemeService,
    private router:Router,
    private userService:UserService,
    private sharedLibService:SharedLibService,
    private authService:MsService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig:MsalGuardConfiguration,
    @Inject('environment')environment:Environment) { 
      this.environment =environment;
    }

    login(){
      this.loginServiceManagement();
    }

    loginServiceManagement(){
      if(this.checkIfAlreadyLoggedIn()){
        this.msalSilentLogin();
      }else{
        this.msalLogin();
      }
    }

    msalLogin(){
      const popupRequest =this.msalGuardConfig.authRequest? this.authService.loginPopup({
        ...this.msalGuardConfig.authRequest,
      }as RedirectRequest):this.authService.loginPopup();

      popupRequest.subscribe({
        next:this.handleLoginResponse.bind(this),error:(error)=>{
          console.log('Error in login popup',{error});
        },
      });
     
    }
    msalSilentLogin(){
      if(!this.checkIfAlreadyLoggedIn()) return;
      const account =this.authService.instance.getAllAccounts()[0];

      const SilentRequest:SilentRequest ={
        account,
        scopes:[this.environment.auth.scope],
        forceRefresh:false,
      };
      this.authService.acquireTokenSilent(SilentRequest).subscribe({
        next:(result:AuthenticationResult)=>{
          console.log('acquireTokenSilent Succeeded!');
          this.handleLoginResponse(result);
        },
        error:(error)=>{
          console.log('Silent token acquire failed',error);

          this.msalLogin();
        },
      });
    }

    handleLoginResponse(data:AuthenticationResult){
      console.log('Authenticated!...');

      this.sharedLibService.authToken =data.accessToken;
      this.authService.instance.setActiveAccount(data.account);
      this.setLoginDisplay();

    }
    setLoginDisplay(){
      this.loginDisplay =this.authService.instance.getAllAccounts().length>0;
    }
    checkIfAlreadyLoggedIn():boolean{
      return (
        this.authService.instance.getAllAccounts().length>0 && Boolean(this.authService.instance.getAllAccounts()[0])
      );
    }

  loadUserDetail(roles:string[]){
    this.userService.findUserByEmail(this.stateService.loggedInEin).subscribe(({data})=>{
      const user =data.findByEmail;
      this.stateService.state.userDetail=user;
    });
    this.themeService.setTheme(
      isADMIN(this.stateService.state.userDetail?.lob)
    );
    this.isProfileLoading =false;
    
    };
  
}
