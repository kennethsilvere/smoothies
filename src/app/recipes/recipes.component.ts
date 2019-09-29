import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  refresh = false;

  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewPort: CdkVirtualScrollViewport;

  recipes: Recipe[];
  recipeServiceSubscription: Subscription

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipeList();
    this.recipeServiceSubscription = this.recipeService.recipeListSubscription.subscribe(recipeList => {
      this.recipes = recipeList;
    });
  }

  trackElement(index: number, element: any) {
    return element.title;
  }

  ngOnDestroy() {
    this.recipeServiceSubscription.unsubscribe();
  }
  
}


