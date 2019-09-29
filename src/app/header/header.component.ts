import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  private loggedIn: boolean = false;
  private unCollapse = false;
  private authLink = '/';
  private recipesLink = '/recipes';
  private authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.isAuthenticated.subscribe(auth => this.loggedIn = auth);
  }

  logout() {
    this.authService.logout();    
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
