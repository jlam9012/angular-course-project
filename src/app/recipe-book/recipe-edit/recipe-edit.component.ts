import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  ingredientNameValidators = [Validators.required];
  ingredientValueValidators = [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)];

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log('edit mode: ' + this.editMode);
        this.initForm();
      }
    );
  }

  private initForm() {
    const recipe = this.recipeService.getRecipe(this.id);
    let id = 0;
    let name = '';
    let imageUrl = '';
    let description = '';
    let ingredients = new FormArray([]);
    
    if (this.editMode) {
      id = recipe.id;
      name = recipe.name;
      imageUrl = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, this.ingredientNameValidators),
              'amount': new FormControl(ingredient.amount, this.ingredientValueValidators)
            }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'id': new FormControl(id, Validators.required),
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imageUrl, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['id'],
    //   this.recipeForm.value['name'], 
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  get ingredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, this.ingredientNameValidators),
        'amount': new FormControl(null, this.ingredientValueValidators)
      }));
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
