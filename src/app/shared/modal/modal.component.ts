import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalService } from './modal.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Ingredient } from 'src/app/recipes/ingredient.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() showEditRecipeModal: boolean;
  @Input() recipeToEdit: any;
  @Input() recipeToBeDeleted: string
  
  constructor(private modalService: ModalService, private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  hideModal() {
    this.modalService.hideModal();
  }

  deleteIngredient(index) {
    this.recipeToEdit.ingredients.splice(index, 1);
  }

  addIngredient() {
    this.recipeToEdit.ingredients.push(new Ingredient('', ''));
  }

  saveRecipe() {
    let recipeToBeSaved = {
      title: this.recipeToEdit.title,
      ingredients: []
    };
    for(let ing of this.recipeToEdit.ingredients) {
      recipeToBeSaved.ingredients.push(ing);
    }
    this.hideModal();
    this.recipeService.editDocument(this.recipeToEdit.id, { ...recipeToBeSaved });
  }

  deleteRecipe() {
    this.recipeService.deleteDocument(this.recipeToBeDeleted);
    this.hideModal();
  }
}
