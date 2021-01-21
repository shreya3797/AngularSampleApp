import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredients[] = [
  new Ingredients('Apple', 8),
  new Ingredients('Tomatoes', 10)
];

  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    }

}
