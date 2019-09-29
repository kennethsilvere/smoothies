import { Injectable  } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from './recipe.model';
import { AlertService } from '../shared/alert/alert.service';

@Injectable()
export class RecipeService{

  private smoothieCollection: AngularFirestoreCollection;
  private recipes: any[];
  public recipeListSubscription = new Subject<any>();
  public recipeDelete = new Subject<any>();

  constructor(private db: AngularFirestore, private alertService: AlertService) {
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

  editDocument(documentId, recipe) {
    this.db.doc<Recipe>(`/smoothie-recipes/${documentId}`).update(recipe)
    .then(
      success => {
        this.broadcastRecipeList();
        this.alertService.showAlert('success', 'Recipe edited!');
        },
      (error: any) => {
        this.broadcastRecipeList();
        this.alertService.showAlert('danger', error.mesage);
      });
  }

  deleteDocument(documentId) {
    this.db.doc<Recipe>(`/smoothie-recipes/${documentId}`).delete()
    .then(
      success => {
        console.log(success);
        this.broadcastRecipeList();
        this.alertService.showAlert('success', 'Recipe DELETED!');
        },
      (error: any) => {
        this.broadcastRecipeList();
        this.alertService.showAlert('danger', error.mesage);
      });
  }

}
