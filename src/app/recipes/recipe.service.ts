import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://goo.gl/qtKT3i',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://goo.gl/qtKT3i',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Apple', 5)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
