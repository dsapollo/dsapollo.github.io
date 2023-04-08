// import { MsalService } from '@azure/msal-angular';
// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root',
// })
// export class MsalGuard implements CanActivate {
//   constructor(private authService: MsalService, private toast: ToastrService) {}

//   canActivate() {
//     if (this.authService.instance.getActiveAccount() == null) {
//       return false;
//     }
//     this.toast.error('Your Not LoggedIn', 'Please Login');
//     return false;
//   }
// }
