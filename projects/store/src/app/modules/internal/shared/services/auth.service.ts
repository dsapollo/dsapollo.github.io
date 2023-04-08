import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService, private msal: MsalService) {}
  users: User[] = [];
  data!: any;
  user: User = new User();

  // getAllUser() {
  //   this.userService.getuser().subscribe((result) => {
  //     this.users = result.data.getAllUsers;
  //     console.log('lap', (this.users = result.data.getAllUsers));
  //     // this.getLoggedInuserDetails();
  //   });
  // }

 

//   getLoggedInuserDetails():User|any {
//     const loggedinEmail = localStorage.getItem('email');
//     console.log('nana',loggedinEmail)
//     if (loggedinEmail) {
//       console.log('nanda')
//       this.userService.findUserByEmail(loggedinEmail).subscribe((res) => {
//         this.user = res.data.findByEmail;
//         console.log('myemail',this.user);
//         return this.user
//       });
//     }
//     return null;
//   }
// }
}

// this.msal.instance.getAccountByUsername;
