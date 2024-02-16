import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrl: './recipe-grid.component.css'
})
export class RecipeGridComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecipeClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
