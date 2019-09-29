import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlertService } from './shared/alert/alert.service';
import { ModalService } from './shared/modal/modal.service';
import { Observable, Subscription } from 'rxjs';
import { RecipeService } from './recipes/recipe.service';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'smoothies';
  showAlert = false;
  alertMessage: string;
  alertCSSClass: string;
  showModal$: Observable<boolean>;
  recipeEditModal = false;
  recipeToEdit: Recipe;
  recipeToBeDeleted: string;
  private alertSubscription: Subscription;
  private recipeEditSubscription: Subscription;
  private recipeDeleteSubsription: Subscription;


  constructor(private alertService: AlertService, private modalService: ModalService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.showModal$ = this.modalService.modelOpen;

    this.alertSubscription = this.alertService.alert.subscribe((alertData: any) => {
      this.showAlert = true;
      this.alertMessage = alertData.message;
      this.alertCSSClass = alertData.cssClass;
      setTimeout(() => this.showAlert = false, 4000);
    });

    this.recipeEditSubscription = this.modalService.recipeEdit.subscribe((recipeName) => {
      this.recipeEditModal = true
      const recipeForEditing = this.recipeService.getRecipe(recipeName);
      this.recipeToEdit = { ...recipeForEditing }
    });

    this.recipeDeleteSubsription = this.recipeService.recipeDelete.subscribe((recipeName) => {
      this.recipeToBeDeleted = this.recipeService.getRecipe(recipeName).id;
      this.recipeEditModal = false;
    });
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
    this.recipeEditSubscription.unsubscribe();
    this.recipeDeleteSubsription.unsubscribe();
  }
}
