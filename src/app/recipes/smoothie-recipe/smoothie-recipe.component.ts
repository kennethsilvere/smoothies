import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../ingredient.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-smoothie-recipe',
  templateUrl: './smoothie-recipe.component.html',
  styleUrls: ['./smoothie-recipe.component.css']
})
export class SmoothieRecipeComponent implements OnInit {

  @Input() recipeName: string;
  @Input() recipeIngredients: Ingredient[];
  isAdminLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.currentLoggedInUser.username.trim().toLowerCase() === 'admin'.trim().toLowerCase()) {
      this.isAdminLoggedIn = true;
    } else {
      this.isAdminLoggedIn = false;
    }
  }

  editRecipe() {}

  deleteRecipe() {}

}
