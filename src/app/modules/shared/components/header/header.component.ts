import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.services';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public stateService: StateService,
 
  ) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.stateService.toggleSidebar();
  }

  public get isCollapsed(): boolean {
    return this.stateService.isSidebarCollapsed;
  }

  // userFullName(): any {
  //   this.userService
  //     .getPersonById(this.stateService.loggedInEin)
  //     .subscribe((res) => {
  //       let user: any;
  //       user = res.data.getPersonById;
  //       console.log('user full name: ', user.firstName);
  //       return user.firstName;
  //     });
  //   // console.log('user full name: ', user);
  //   return;
  // }
}
