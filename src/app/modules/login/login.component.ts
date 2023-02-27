import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/models/user';
import { StateService } from '../shared/services/state.services';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private toast: ToastrService
    
  ) { }

  ngOnInit(): void {
  }

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  user!:User;

  login() {
    if (!this.loginForm) return;
    this.loginForm.markAsDirty();
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
    if (this.loginForm.valid) {
      this.userService.login(email, password).subscribe(
        (res) => {
          if (res) {
            this.user = res.data.login;
           // localStorage.setItem('loggedInEmail');
            this.router.navigate(['dashboard']);
            this.toast.success(
              'Login success!!!'
            );
          }
        },

        (error) => {
          this.toast.error('Incorrect email or password', 'User not found');
        }
      );
    } else {
      if (!email) {
        this.toast.error('Invalid email entered', 'User not found');
      }
      if (!password) {
        this.toast.error('Invalid password entered', 'User not found');
      }
    }
  

  }
}