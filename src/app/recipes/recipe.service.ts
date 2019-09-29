import { Injectable  } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

  private smoothieCollection;
  private recipes: any[];
  public recipeListSubscription = new Subject<any>();

  constructor(private db: AngularFirestore) {
    this.smoothieCollection = this.db.collection<Recipe>('smoothie-recipes');
  }

  getRecipe(recipeName): Recipe {
    for(const recipe of this.recipes) {
      if(recipe.title === recipeName) {
        return { ...recipe };
      }
    }
  }
 
  getRecipeList() {
    /* This snippet of code only gets values, but we need the document id to edit/delete it */
    // this.smoothieCollection.valueChanges().subscribe(
    //   recipes => {
    //     this.recipes = recipes;
    //     this.broadcastRecipeList();
    //   }
    // );
    
    this.smoothieCollection.snapshotChanges()
    .pipe(
      map((docArray: any) => {
          return docArray.map(doc => {
            return {
              title: doc.payload.doc.data()['title'],
              ingredients: doc.payload.doc.data()['ingredients'],
              id: doc.payload.doc.id
            };
          });
        }
      )
    )
    .subscribe(
      recipes => {
        this.recipes = recipes;
        this.broadcastRecipeList();
      }
    );
  }

  broadcastRecipeList() {
    this.recipeListSubscription.next(this.recipes.slice());
  }

  saveRecipeToFirebase(recipe: Recipe) {
    this.smoothieCollection.add({ ...recipe  });
  }

}
