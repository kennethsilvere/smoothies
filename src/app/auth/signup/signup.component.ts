import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model;

  minDate: NgbDate = new NgbDate(1960, 1, 1);  

  maxDate: NgbDate = new NgbDate(2002, 12, 31);  

  constructor() { }

  ngOnInit() {
  }

}
