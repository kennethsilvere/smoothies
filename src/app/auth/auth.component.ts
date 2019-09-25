import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // Flag to determine which form to show - login or signup 
  authComponent = 'login';

  constructor() { }

  ngOnInit() {
  }

  // Triggered when either of the tabs are clicked. Sets the flag to either login or signup
  openAuthComponent(feature) {
    this.authComponent = feature;
  }

}
