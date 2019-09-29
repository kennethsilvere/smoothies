import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../ingredient.model';

import { AuthService } from 'src/app/auth/auth.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-smoothie-recipe',
  templateUrl: './smoothie-recipe.component.html',
  styleUrls: ['./smoothie-recipe.component.css']
})
export class SmoothieRecipeComponent implements OnInit {

  @Input() recipeName: string;
  @Input() recipeIngredients: Ingredient[];
  isAdminLoggedIn: boolean;

  constructor(private authService: AuthService, private appModalService: ModalService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.isAdminLoggedIn = this.authService.isAdminLoggedIn;
  }

  editRecipe() {
    this.appModalService.openModal();
    this.appModalService.editRecipe(this.recipeName);
  }

  deleteRecipe() {
    this.recipeService.recipeDelete.next(this.recipeName);
    this.appModalService.openModal();

    console.log('delete');
    console.log(this.recipeName);
  }

}
