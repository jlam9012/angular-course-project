import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
// import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    // recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(1, 'Tasty Schnitzel', 'A super-tasty schnitzel!', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1280px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(2, 'Big Fat Burger', 'Just what it says!', 
            'https://upload.wikimedia.org/wikipedia/commons/3/3f/Flickr_-_cyclonebill_-_Burger.jpg',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Meat', 4),
                new Ingredient('Cheese', 4)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.find(r => r.id === id);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}