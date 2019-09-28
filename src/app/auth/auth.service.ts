import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../shared/user.model';
import { AlertService } from '../shared/alert/alert.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  private loggedIn = false;
  public currentLoggedInUser: User;
  public isAuthenticated = new Subject<boolean>();
  public userSignedUp = new Subject<boolean>();
  public isAdminLoggedIn = false;

  constructor(private alertService: AlertService, 
              private router: Router,
              private afAuth: AngularFireAuth) { }

  isAuth() {
    return this.loggedIn;
  }

  public login(userLogin: any) {
    this.afAuth.auth
    .signInWithEmailAndPassword(userLogin.email, userLogin.password)
    .then((result: any) => {
      this.loggedIn = true;
      this.currentLoggedInUser = userLogin.email;
      this.alertService.showAlert('success', 'Logged in!');
      this.broadcastAuthStatus();
      this.router.navigateByUrl("recipes");
      this.checkIfAdmin(result.user.uid);
    })
    .catch(error => {
      this.loggedIn = false;
      this.currentLoggedInUser = null;
      this.alertService.showAlert('danger', error.message);
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

  private checkIfAdmin(adminUid) {
    if(environment.adminUid == adminUid) {
      this.isAdminLoggedIn = true;            
    } else {
      this.isAdminLoggedIn = false;
    }
  }
}
