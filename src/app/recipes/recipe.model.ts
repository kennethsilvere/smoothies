import { Ingredient } from './ingredient.model';

export class Recipe {

  constructor(public title: string,
              public ingredients: Ingredient[],
              public id? : string) {}

}
