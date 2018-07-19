import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
    this.id = +param['id'];
    });
    this.recipe = this.recipeService.getRecipe(this.id);
  }

  onShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }

  onEditRecipe() {
     this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
