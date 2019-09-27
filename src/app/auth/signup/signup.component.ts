import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  d;
 
  minDate: NgbDate = new NgbDate(1960, 1, 1);

  maxDate: NgbDate = new NgbDate(2002, 12, 31);

  constructor() { }

  ngOnInit() {
  }

  onSubmit(signupForm: NgForm) {
    console.log(signupForm);
  }

}
