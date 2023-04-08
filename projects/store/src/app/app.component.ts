import { Component, Inject } from '@angular/core';
import { StateService } from 'projects/service-management/src/app/modules/internal/shared/services/state.services';
import { MsalGuardConfiguration, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, SilentRequest,RedirectRequest } from '@azure/msal-browser';
import { Environment } from 'projects/shared-lib/src/lib/models/shared.model';
import { SharedLibService, ThemeService, UserService } from 'projects/shared-lib/src/public-api';

import { MsalService } from '@azure/msal-angular';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

export class AppComponent {
  title = 'store';
  // loggedIn=false;
  loginDisplay =false;
 
  showGotoTop=true;
  environment:Environment;

  constructor(public sharedService:SharedLibService,public stateService:StateService,
   private themeService:ThemeService,private userService:UserService,  private authService: MsalService,
   @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig:MsalGuardConfiguration,
    @Inject('environment') environment:Environment){
      this.environment=environment;
   this.login();


     
    }

  gotoTop(){
    this.sharedService.state.scrollToTop$.next(null);
    
  }

  login() {
    let account =this.authService.instance.getAllAccounts()[0];
    if(account === undefined){
     if(this.msalGuardConfig.authRequest){
       console.log('if');
       this.authService.loginPopup({
         ...this.msalGuardConfig.authRequest,
       }as RedirectRequest);
     }else{
       
       this.authService.loginPopup();
     }
     this.loginDisplay =true;
     
     
   }else{
     let silentRequest:SilentRequest={
       account,
       scopes:[environment.auth.scope],
       forceRefresh:false,
     };
     this.authService.acquireTokenSilent(silentRequest).subscribe({
       next:(result:AuthenticationResult)=>{
         console.log('acquireTokenSilent Succeeded!');
         //console.log(result);
        
         
        // console.log("Mytoken",this.stateService.state.accessToken =result.accessToken)
         this.loginDisplay=true;
         localStorage.setItem('tkn',this.stateService.state.accessToken =result.accessToken)
        // this.toast.success('Sucessfully LoggedIn', 'MSAL-Login');
       },
       error:(error)=>{
         if(this.msalGuardConfig.authRequest){
          // console.log('login redirect 1');
           //console.log(this.msalGuardConfig.authRequest);
           this.authService.loginPopup({
             ...this.msalGuardConfig.authRequest,
           }as RedirectRequest);
         }else{
         //  console.log('login redirect 2');
           this.authService.loginPopup();
         }
       },
           });
         }
       }
     
   
   setloginDisplay(){
     this.loginDisplay =this.authService.instance.getAllAccounts().length >0;
 
   //  this.authService.instance.setActiveAccount(Response.account);
     
   //   localStorage.setItem('tkn', response.accessToken);
    console.log(this.authService.instance.getAllAccounts().length);
   }
 
   checkIfUserAlreadyLoggedIn():boolean{
     return this.authService.instance.getAllAccounts().length >0;
   }
 
   setAuthValue(){
     this.loginDisplay=true;
   }
 
   checkAuthentication(){
     if(this.checkIfUserAlreadyLoggedIn()){
       const accountInfo =this.authService.instance.getAllAccounts();
       let tokennobj =accountInfo[0].idTokenClaims
       this.authService.instance.setActiveAccount(accountInfo[0]);
       this.setloginDisplay();
     }
   }
 
  get currentTheme(){
   return this.themeService.currentTheme;
  }
 
 
 

  // set isProfileLoading(isProfileLoading:boolean){
  //   this.msalService.isProfileLoading=isProfileLoading;
  // }

  // get isAppLoaded(){
  //   return (
  //     this.msalService.loginDisplay && !this .msalService.isProfileLoading,
  //     this.msalService.setLoginDisplay || this.msalService.checkIfAlreadyLoggedIn
  //   );  
  // }

  

  // setAuthValue(){
  //     this.stateService.state.loggedIn;
  //     this.sharedService.authToken=
  //     'eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik5NV2RvYVZnTC0yODZyeHBqNUJuSDBIT0puS0ota2tQb0RtLWQzcWxSTkkiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8xNGY3M2FlZi1lMDQxLTQ5NWMtOTUzMy01YzhmNWZlMTJiMjYvIiwiaWF0IjoxNjgwNjIwNzg2LCJuYmYiOjE2ODA2MjA3ODYsImV4cCI6MTY4MDYyNDg5OSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFZUUFlLzhUQUFBQUNNN2tyU003d0lFdi9YdTlvcHgzRXFVeElFbWNLWExIK0gzNWVidFkyV2dHNU9BbjdTeDliWnZ6ZW44a2FSY1ZCQXlWOEZvZHVFRnJOU0FSdEVXZ0Y3NUhPRXhWK1Z2TjdvWmY1cnloV1FPZklFanR1WE1rbHZlT0xVeHJIRFI2d3U5UVlHdkFoUnQzM0oxYTFzb0wzTXkwbExndm81UGhSUzI3eFhqb1paST0iLCJhbHRzZWNpZCI6IjE6bGl2ZS5jb206MDAwMzdGRkUyQkE5OEVGQiIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiRGlnaXRhbC1TaG9wcGluZyIsImFwcGlkIjoiM2NkMzdiYzgtNzJiNC00OTFkLWIxNTctNjAyNTViYWI3NGU5IiwiYXBwaWRhY3IiOiIwIiwiZW1haWwiOiJuYW5kYWt1bWFyMDY5OEBnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6Ikt1bWFyIiwiZ2l2ZW5fbmFtZSI6Ik5hbmRhIiwiaWRwIjoibGl2ZS5jb20iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxMDMuMjI0LjM1LjkyIiwibmFtZSI6Ik5hbmRhIEt1bWFyIiwib2lkIjoiMTRhOGFkZWUtNTE3YS00MzllLTg4NmMtNTcyNGEzN2RkYTA1IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxRTBEM0I4OTUiLCJyaCI6IjAuQVhFQTd6cjNGRUhnWEVtVk0xeVBYLUVySmdNQUFBQUFBQUFBd0FBQUFBQUFBQUNIQUNZLiIsInNjcCI6ImVtYWlsIFVzZXIuUmVhZCBwcm9maWxlIG9wZW5pZCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlZ5SE4wQlNadk1ZLUZIY2hKTHpGWDMxclA4M2RwV2hWaEU0eVh4MlZDOVUiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiIxNGY3M2FlZi1lMDQxLTQ5NWMtOTUzMy01YzhmNWZlMTJiMjYiLCJ1bmlxdWVfbmFtZSI6ImxpdmUuY29tI25hbmRha3VtYXIwNjk4QGdtYWlsLmNvbSIsInV0aSI6IkVtc3UxWkNfUTBHMHJzTnd1R1VLQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImYwMjNmZDgxLWE2MzctNGI1Ni05NWZkLTc5MWFjMDIyNjAzMyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiOW9EbjVpcG1tQ19GUG5JY3hFWE9ydDRUY2RTbEJ1MzloZnlMdGJiN3FxSSJ9LCJ4bXNfdGNkdCI6MTY0NjMwMTAxNX0.CXXEYEAW4r2oST8iIYBxNG1iaXSriCSJgzoxpo9VsaC7OKvv1cZJ7BKlNrRU2TNM0KUz-2eVulqkq4QIdOsaVnlEW5W2QJQPhvW_51umYmWIZtjUDdhO3l0N77DWF8kDFw3UMgacLN748vtuc8WA1htvQFca0Zmo33Ol2l9WiA2qGZ7-jAacmj83XCq57AnFwmoysWHBga8szF5W0tHhB6_6r4FJm7BKhxwWYnrw87IJSbTXXFos4QYS6Na9dKPSL3wvuiTlgbXl2gPgmiAEG6yppb8czCGcRI8gUiCpzOAwJSxlQa9esMqgt5XIiF3A1XNB2vpfH37H43jPD1DhxA'
  // this.themeService.setTheme(
  //   isADMIN(this.stateService.state.userDetail.lob)
  // );
  // this.isProfileLoading=false;
  
  //   }

    



}
