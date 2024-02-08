import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-grid',
  templateUrl: './shopping-list-grid.component.html',
  styleUrl: './shopping-list-grid.component.css',
})
export class ShoppingListGridComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientSub = this.shoppingListService.ingredientsChanged
      .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
