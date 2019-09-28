import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  d;
 
  minDate: NgbDate = new NgbDate(1960, 1, 1);

  maxDate: NgbDate = new NgbDate(2002, 12, 31);

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(signupForm: NgForm) {
    console.log(signupForm);
    const day = signupForm.value.datepicker.day;
    const month = signupForm.value.datepicker.month;
    const year = signupForm.value.datepicker.year;
    const user: User = {
      ...signupForm.value,
      birthday: new Date(`${year}-${month}-${day}`)
    };
    this.authService.signUp(user);
  }

}
