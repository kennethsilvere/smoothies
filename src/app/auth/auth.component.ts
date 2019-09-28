import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // Flag to determine which form to show - login or signup 
  authComponent = 'login';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userSignedUp.subscribe(signedUp => {
      if(signedUp) {
        this.authComponent = 'login';                
      }
    });
  }

  // Triggered when either of the tabs are clicked. Sets the flag to either login or signup
  openAuthComponent(feature) {
    this.authComponent = feature;
  }

}
