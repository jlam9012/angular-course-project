import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    this.ingredientAdded.emit(newIngredient);
  }
}
