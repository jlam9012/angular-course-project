import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrl: './recipe-grid.component.css'
})
export class RecipeGridComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Chicken Parm', 'First recipe', 'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg'),
    new Recipe('Other Chicken Parm', 'First recipe', 'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
