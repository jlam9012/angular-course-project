import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        this.pushOrUpdateIngredient(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        ingredients.forEach(
            (toAdd: Ingredient) => {
              this.pushOrUpdateIngredient(toAdd);
            }
        );
        //this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    private pushOrUpdateIngredient(ingredient: Ingredient) {
        const existingIngredient = this.ingredients.find(
            (curIngredient) => 
                curIngredient.name === ingredient.name
            );
        if (existingIngredient) {
            existingIngredient.amount = existingIngredient.amount + ingredient.amount;
        } else {
            this.ingredients.push(ingredient);
        }
    }
}