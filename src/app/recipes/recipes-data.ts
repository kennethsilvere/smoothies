import { Recipe } from "./recipe.model";
import { Ingredient } from './ingredient.model';

export const recipeList = [
  new Recipe(
      'Banana' ,
      [
          new Ingredient('Bananas' , '2'),
          new Ingredient('Vanilla yogurt & milk' , '1/2 cup'),
          new Ingredient('Honey' , '2 teaspoons'),
          new Ingredient('Ice', '1 cup'),
          new Ingredient('Cinnamon', 'a pinch')
      ]
  ),
  new Recipe(
      'Strawberry-Banana' ,
      [
          new Ingredient('Banana' , '1'),
          new Ingredient('Strawberries' , '1 cup'),
          new Ingredient('Vanilla yogurt & milk' , '1/2 cup'),
          new Ingredient('Honey' , '2 teaspoons'),
          new Ingredient('Ice', '1 cup'),
          new Ingredient('Cinnamon', 'a pinch')
      ]
  ),
  new Recipe(
      'Strawberry Shortcake' ,
      [
          new Ingredient('Strawberries' , '2 cup'),
          new Ingredient('Crumbled pound cake' , '1 cup'),
          new Ingredient('Milk' , '1 1/2 cups'),
          new Ingredient('Ice' , '1 1/2 cups'),
          new Ingredient('Sugar', 'to taste')
      ]
  ),
  new Recipe(
      'Triple-Berry Blend',
      [
          new Ingredient('Mixed berries (Blackberry, Raspberry, Strawberry)' , '1 1/2 cup'),
          new Ingredient('Milk' , '1 cups'),
          new Ingredient('Ice' , '1 cups'),
          new Ingredient('Sugar' , 'to taste')
      ]
  ),
  new Recipe(
      'Raspberry-Orange' ,
      [
          new Ingredient('Orange juice' , '1 cup'),
          new Ingredient('Raspberries' , '1 cup'),
          new Ingredient('Plain yogurt' , '1/2 cup'),
          new Ingredient('Ice', '1 cup'),
          new Ingredient('Sugar', 'to taste')
      ]
  ),
  new Recipe(
      'Peach-Mango-Banana' ,
      [
          new Ingredient('Peaches' , '1 cup'),
          new Ingredient('Mango' , '1 cup'),
          new Ingredient('Plain yogurt' , '1 cup'),
          new Ingredient('Ice', '1 cup'),
          new Ingredient('Banana' , '1/2'),
          new Ingredient('Sugar' , 'to taste')
      ]
  ),
  new Recipe(
      'Honeydew-Almond' ,
      [
          new Ingredient('Honeydew melon' , '2 cups chopped'),
          new Ingredient('Almond milk' , '1 cup'),
          new Ingredient('Ice', '1 cup'),
          new Ingredient('Honey' , 'to taste')
      ]
  ),
  new Recipe(
      'Cantaloupe',
      [
          new Ingredient('Cantaloupe' , '2 cups chopped'),
          new Ingredient('Lime juice' , '1/2 lime'),
          new Ingredient('Sugar' , '3 tablespoons'),
          new Ingredient('Ice', '1 cup'),
          new Ingredient('Water', '1/2 cup')
      ]
  ),
  new Recipe(
      'Carrot-Apple',
      [
          new Ingredient('Carrot juice' , '1 cup'),
          new Ingredient('Apple juice' , '1 cup'),
          new Ingredient('Ice' , '1 1/2 cup'),
          new Ingredient('', '')
      ]
  ),
  new Recipe(
      'Kiwi-Strawberry' ,
      [
          new Ingredient('Strawberries' , '1 cup'),
          new Ingredient('Kiwis' , '2 peeled'),
          new Ingredient('Sugar' , '2 tablespoons'),
          new Ingredient('Ice', '2 cups')
      ]
  ),
  new Recipe(
      'Cherry-Vanilla' ,
      [
          new Ingredient('Frozen pitted cherries' , '1 1/2 cups'),
          new Ingredient('Milk' , '1 1/4 cups'),
          new Ingredient('Sugar' , '3 tablespoons'),
          new Ingredient('Vanilla extract', '1/2 teaspoon'),
          new Ingredient('Almond extract', '1/4 teaspoon'),
          new Ingredient('Salt', 'a pinch'),
          new Ingredient('Ice', '1 cup'),
      ]
  ),
  new Recipe(
      'Grape' ,
      [
          new Ingredient('Seedless red grapes' , '2 cups'),
          new Ingredient('Concord grape juice' , '1 cup'),
          new Ingredient('Ice', '1 1/2 cup')
      ]
  ),
  new Recipe(
      'Blueberry-Pear' ,
      [
          new Ingredient('Frozen blueberries' , '1 1/2 cup'),
          new Ingredient('Pear' , '1 chopped'),
          new Ingredient('Plain yogurt' , '1 1/2 cup'),
          new Ingredient('Ice', '1 1/2 cup'),
          new Ingredient('Sugar' , 'to taste')
      ]
  ),
  new Recipe(
      'Peach-Ginger' ,
      [
          new Ingredient('Frozen sliced peaches' , '2 cups'),
          new Ingredient('Buttermilk' , '1 1/2 cup'),
          new Ingredient('Brown sugar' , '3 tablespoons'),
          new Ingredient('Grated ginger' , '1 tablespoon'),
          new Ingredient('' , ''),
          new Ingredient('' , ''),
          new Ingredient('' , '')
      ]
  ),
  new Recipe(
      'Apple-Ginger' ,
      [
          new Ingredient('Chopped peeled apple' , '1'),
          new Ingredient('Peeled ginger' , '1/2-inch piece'),
          new Ingredient('Lime juice' , 'the juice of 2 limes'),
          new Ingredient('Honey' , '1/4 cup'),
          new Ingredient('Water' , '1 cup'),
          new Ingredient('Ice' , '2 cups')
      ]
  ),
  new Recipe(
      'Black Raspberry–Vanilla' ,
      [
          new Ingredient('Blackberries' , '1 pint'),
          new Ingredient('Raspberries' , '1/2 cup'),
          new Ingredient('Vanilla yogurt' , '1 cup'),
          new Ingredient('Honey' , '1 tablespoon')
      ]
  ),
  new Recipe(
      'Mango-Acai' ,
      [
          new Ingredient('Frozen acai berry puree' , 'Two 4-ounce packages'),
          new Ingredient('Mango' , '1 cup chopped'),
          new Ingredient('Orange juice' , '1/2 cup'),
          new Ingredient('Ice' , '2 cups')
      ]
  ),
  new Recipe(
      'Cucumber-Kale' ,
      [
          new Ingredient('Vegetable juice' , '1 1/4 cups'),
          new Ingredient('Cucumber' , '1/2 peeled'),
          new Ingredient('Kale leaves' , '3'),
          new Ingredient('Lemon juice' , '1/2 lemon')
      ]
  ),
  new Recipe(
      'Chocolate-Banana' ,
      [
          new Ingredient('Banana' , '1'),
          new Ingredient('Chocolate ice cream' , '1 cup'),
          new Ingredient('Milk' , '1/2 cup'),
          new Ingredient('Ice' , '1/2 cup'),
          new Ingredient('Salt' , 'a pinch')
      ]
  )
];
