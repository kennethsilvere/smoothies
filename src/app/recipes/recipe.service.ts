import { Injectable } from '@angular/core';

import * as recipesData from './recipes-data';
import { Recipe } from './recipe.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipes: any = recipesData.recipeList;

  recipeListSubscription = new Subject<any>();

  getRecipe(recipeName): Recipe {
    for(const recipe of this.recipes) {
      if(recipe.title === recipeName) {
        return { ...recipe };
      }
    }
  }
 
  getRecipeList() {
    return this.recipes.slice();
  }

  broadcastRecipeList() {
    this.recipeListSubscription.next(this.getRecipeList());
  }

  constructor() { }
}
