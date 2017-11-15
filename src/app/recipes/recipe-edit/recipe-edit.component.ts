import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  recipeId: number;
  editMode = false;

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.recipeId = Number(params['id']);
        this.editMode = !!params['id'];
      });
  }

}
