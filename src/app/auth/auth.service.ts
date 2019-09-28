import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from '../shared/user.model';
import { AlertService } from '../alert/alert.service';

@Injectable()
export class AuthService {

  private loggedIn = false;

  public currentLoggedInUser: User;

  public isAuthenticated = new Subject<boolean>();

  users = [
    new User('Kenneth', 
             'Silvere', 
             'kennethsilvere93@gmail.com', 
             new Date("1993-11-10"),
             'testpassword')
  ];

  constructor(private alertService: AlertService, private router: Router) { }

  isAuth() {
    return this.loggedIn;
  }


  public login(userLogin: any) {
    for(const user of this.users) {
      if(user.email === userLogin.email) {
        if(userLogin.password === user.password) {
          this.loggedIn = true;
          this.currentLoggedInUser = user;
          this.alertService.showAlert('success', 'Logged in!');
          this.broadcastAuthStatus();
          this.router.navigateByUrl("'/recipes'");   
        } else {
          this.loggedIn = false;
          this.alertService.showAlert('danger', 'Sorry wrong password');   
        }
      } else {
        this.alertService.showAlert('danger', 'Sorry email not found.');   
      }
    }    
  }

  public logout() {
    this.alertService.showAlert('primary', 'Logged out!');
    this.loggedIn = false;
    this.currentLoggedInUser = undefined;
    this.broadcastAuthStatus();
    this.router.navigateByUrl("''");   
  }

  public signUp(signingUpUser: User) {
    for(let user of this.users) {
      if(user.email.trim().toLowerCase() === signingUpUser.email.trim().toLowerCase()) {
        this.alertService.showAlert('danger', 'User already exits. Please login.');
        return;
      }
    }
    this.users.push(signingUpUser);
    this.alertService.showAlert('primary', 'User signed up. Please login.');
  }

  private broadcastAuthStatus() {    
    this.isAuthenticated.next(this.loggedIn);
  }
}