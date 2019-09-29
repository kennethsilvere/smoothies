import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  // Flag to determine which form to show - login or signup 
  authComponent = 'login';
  private userSignedUpSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSignedUpSubscription = this.authService.userSignedUp.subscribe(signedUp => {
      if(signedUp) {
        this.authComponent = 'login';                
      }
    });
  }

  // Triggered when either of the tabs are clicked. Sets the flag to either login or signup
  openAuthComponent(feature) {
    this.authComponent = feature;
  }

  ngOnDestroy() {
    this.userSignedUpSubscription.unsubscribe();
  }

}
