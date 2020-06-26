import { Component, OnInit } from '@angular/core';
import { RegisterFoodService } from '../register-food.service';
import { PantryService } from '../pantry.service';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss'],
})
export class PantryComponent implements OnInit {

  constructor(public registerFoodService: RegisterFoodService) { }

  ngOnInit() {}

  teste(valueIndex:any) {
    var lista = this.registerFoodService.foodList;
    console.log(valueIndex);
 
  }

  removeItem(valueIndex:any){
    this.registerFoodService.foodList.splice(valueIndex,1);
  }
}