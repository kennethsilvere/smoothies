import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  refresh = false;

  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewPort: CdkVirtualScrollViewport;

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipeList();
    this.recipeService.recipeListSubscription.subscribe(recipeList => {
      this.recipes = recipeList;
    });
  }

  trackElement(index: number, element: any) {
    return element.title;
  }

  }


