import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 3)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const idx = this.ingredients.findIndex(existedIngredient => existedIngredient.name === ingredient.name);
    if (idx === -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[idx].amount += ingredient.amount;
    }
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
