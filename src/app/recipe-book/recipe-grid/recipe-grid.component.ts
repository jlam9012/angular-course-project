import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrl: './recipe-grid.component.css'
})
export class RecipeGridComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipeClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
