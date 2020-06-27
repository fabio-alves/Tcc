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

  getIndex(valueIndex:any) {
  /*  let a = this.registerFoodService.getIndex(valueIndex)
    console.log("Sera",a);
  */
  this.registerFoodService.setIndex(valueIndex);

  }

  removeItem(valueIndex:any){
    this.registerFoodService.foodList.splice(valueIndex,1);
  }
}