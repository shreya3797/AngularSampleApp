import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [new Recipe('Test Recipe',
   'This is a Test Recipe', 'https://asmallbite.com/wp-content/uploads/2016/09/Ada-Pradhaman-Onam-Recipes1.jpg'),
   new Recipe('Another Test Recipe',
   'This is a Test Recipe', 'https://asmallbite.com/wp-content/uploads/2016/09/Ada-Pradhaman-Onam-Recipes1.jpg')];
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
     }

}
