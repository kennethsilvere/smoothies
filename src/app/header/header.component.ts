import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  loggedIn: boolean = false;

  unCollapse = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(auth => this.loggedIn = auth);
  }

  logout() {
    this.authService.logout();    
  }

}
