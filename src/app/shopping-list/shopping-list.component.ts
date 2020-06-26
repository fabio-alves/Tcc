import { Component, OnInit } from '@angular/core';
import { RegisterFoodService } from '../register-food.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {

  constructor(public registerFoodService: RegisterFoodService) { }

  ngOnInit() {}

}
