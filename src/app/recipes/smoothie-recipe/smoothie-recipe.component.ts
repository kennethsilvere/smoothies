import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-smoothie-recipe',
  templateUrl: './smoothie-recipe.component.html',
  styleUrls: ['./smoothie-recipe.component.css']
})
export class SmoothieRecipeComponent implements OnInit {

  @Input() recipeName: string;


  @Input() recipeIngredients: Ingredient[];

  constructor() { }

  ngOnInit() {
  }

}
