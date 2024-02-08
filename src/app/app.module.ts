import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListGridComponent } from './shopping-list/shopping-list-grid/shopping-list-grid.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeGridComponent } from './recipe-book/recipe-grid/recipe-grid.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListGridComponent,
    ShoppingListEditComponent,
    RecipeGridComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    DropdownDirective,
    ShoppingListComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
