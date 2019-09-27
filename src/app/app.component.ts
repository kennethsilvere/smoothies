import { Component } from '@angular/core';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smoothies';
  showAlert = false;
  alertMessage: string;
  alertCSSClass: string;

  constructor(private alertService: AlertService) {
    this.alertService.alert.subscribe((alertData: any) => {
      this.showAlert = true;
      this.alertMessage = alertData.message;
      this.alertCSSClass = alertData.cssClass;

      setTimeout(() => this.showAlert = false, 4000);
    });
  }

}
