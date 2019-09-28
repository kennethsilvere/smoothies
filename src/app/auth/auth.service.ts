import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../shared/user.model';
import { AlertService } from '../shared/alert/alert.service';

@Injectable()
export class AuthService {

  private loggedIn = false;
  public currentLoggedInUser: User;
  public isAuthenticated = new Subject<boolean>();
  public userSignedUp = new Subject<boolean>();
  public isAdminLoggedIn = new Subject<boolean>();

  constructor(private alertService: AlertService, 
              private router: Router,
              private afAuth: AngularFireAuth) { }

  isAuth() {
    return this.loggedIn;
  }


  public login(userLogin: any) {
    // for(const user of this.users) {
    //   if(user.username === userLogin.username) {
    //     if(userLogin.password === user.password) {
    //       this.loggedIn = true;
    //       this.currentLoggedInUser = user;
    //       this.alertService.showAlert('success', 'Logged in!');
    //       this.broadcastAuthStatus();
    //       this.router.navigateByUrl("recipes");
    //       this.checkIfAdmin();
    //       return;
    //     } else {
    //       this.loggedIn = false;
    //       this.alertService.showAlert('danger', 'Sorry wrong password');   
    //     }
    //   }
    // }
    // this.alertService.showAlert('danger', 'Sorry username not found.');  

    this.afAuth.auth
    .signInWithEmailAndPassword(userLogin.email, userLogin.password)
    .then(result => {
      console.log(result);
      this.loggedIn = true;
      this.currentLoggedInUser = userLogin;
      this.alertService.showAlert('success', 'Logged in!');
      this.broadcastAuthStatus();
      this.router.navigateByUrl("recipes");
      this.checkIfAdmin();
    })
    .catch(error => {
      console.log(error);
      this.alertService.showAlert('danger', 'error.message');
    });
  }

  public logout() {
    this.alertService.showAlert('primary', 'Logged out!');
    this.loggedIn = false;
    this.currentLoggedInUser = undefined;
    this.broadcastAuthStatus();
    this.router.navigateByUrl("''");   
  }

  public signUp(signingUpUser: User) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(signingUpUser.email, signingUpUser.password)
      .then(result => {
        this.alertService.showAlert('primary', 'User signed up. Please login.');
        this.userSignedUp.next(true);
      })
      .catch(error => {
        this.alertService.showAlert('danger', error.message);
      });
  }

  private broadcastAuthStatus() {    
    this.isAuthenticated.next(this.loggedIn);
  }

  private checkIfAdmin() {
    if(this.currentLoggedInUser.username === 'admin') {   
      this.isAdminLoggedIn.next(true);            
    } else {
      this.isAdminLoggedIn.next(false);
    }
  }
}
