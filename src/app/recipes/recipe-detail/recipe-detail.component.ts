import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList() {
    this.recipe.ingredients.forEach((ingredient: Ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
