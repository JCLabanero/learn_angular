import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'The content',
      'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg'
    ),
    new Recipe(
      'Test Recipe2',
      'The content2',
      'https://marketplace.canva.com/EAFNsV8XtFc/1/0/1067w/canva-white-modern-recipe-card-g0ij-n11PwM.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
