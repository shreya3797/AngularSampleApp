import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-recipe-app';
  feature = 'recipe';
 onNavigate(feature: string) {
 this.feature = feature;
 }
}