import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css'
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {
  //   this.recipeService.recipeSelected
  //     .subscribe(
  //       (recipe: Recipe) => {
  //         this.selectedRecipe = recipe;
  //       }
  //     );
  // }
  }
}
