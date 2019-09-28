import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {

  alert = new Subject();

  constructor() { }

  showAlert(type, message) {
    let cssClass = '';
    switch(type) {
      case 'primary':
        cssClass = 'alert-primary';
        break;
      case 'secondary':
        cssClass = 'alert-secondary';
        break;
      case 'success':
        cssClass = 'alert-success';
        break;
      case 'danger': 
        cssClass = 'alert-danger';
        break;
      default:
        cssClass = 'alert-secondary';
    }
    this.alert.next({cssClass, message});
  }
}
