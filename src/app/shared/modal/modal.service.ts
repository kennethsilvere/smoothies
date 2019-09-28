import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable()
export class ModalService {

  public modelOpen = new Subject<any>();
  public recipeEdit = new Subject<any>();

  constructor() { }

  openModal() {
    this.modelOpen.next(true);
  }

  hideModal() {
    this.modelOpen.next(false);
  }

  editRecipe(recipeName: string) {
    this.recipeEdit.next(recipeName);
  }


}
