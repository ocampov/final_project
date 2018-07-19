import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) { }
  private recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Frech Fries', 20)
    ]),
    new Recipe('A second Test recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this.slService.addIngredients(ingredients);
  }
}
