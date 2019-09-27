import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 101; i++) {
      this.items.push(i);
    }
  }

}
