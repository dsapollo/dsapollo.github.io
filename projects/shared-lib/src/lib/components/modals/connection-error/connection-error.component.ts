import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-connection-error',
  templateUrl: './connection-error.component.html',
  styleUrls: ['./connection-error.component.scss'],
})
export class ConnectionErrorModal implements OnInit {
  constructor(public modal: NgbActiveModal,private msal:MsalService,  
    private toast: ToastrService,) {}

  ngOnInit(): void {}

  logout() {
   
    this.toast.success('Log-out Sucessfully', 'Msal-Logout');
    localStorage.removeItem('token');
    this.msal.logout();
  }

  refresh(){
    this.msal.instance.acquireTokenSilent
    window.location.reload();
  }
}
