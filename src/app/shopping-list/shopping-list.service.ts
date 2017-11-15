import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

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
      this.ingredients.push({...ingredient});
      this.ingredientsChanged.next(this.ingredients.slice());
    } else {
      this.ingredients[idx].amount = Number(this.ingredients[idx].amount) + Number(ingredient.amount);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }
}
