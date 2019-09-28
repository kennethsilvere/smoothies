import { Component, OnInit } from '@angular/core';

import { AlertService } from './shared/alert/alert.service';
import { ModalService } from './shared/modal/modal.service';
import { Observable } from 'rxjs';
import { RecipeService } from './recipes/recipe.service';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'smoothies';
  showAlert = false;
  alertMessage: string;
  alertCSSClass: string;
  showModal$: Observable<boolean>;
  recipeEditModal = false;
  recipeToEdit: Recipe;


  constructor(private alertService: AlertService, private modalService: ModalService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.showModal$ = this.modalService.modelOpen;
    this.alertService.alert.subscribe((alertData: any) => {
      this.showAlert = true;
      this.alertMessage = alertData.message;
      this.alertCSSClass = alertData.cssClass;
      setTimeout(() => this.showAlert = false, 4000);
    });

    
    this.modalService.recipeEdit.subscribe((recipeName) => {
      console.log('recipe edit - modal');
      this.recipeEditModal = true
      this.recipeToEdit = this.recipeService.getRecipe(recipeName);
    });
  }
}
