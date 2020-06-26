import { Injectable } from '@angular/core';

interface Food{
  name:  string;
  date: Date;
  qtd: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterFoodService {

  foodList: Array<Food> = [];
  constructor() { }

  insertFood(food:Food){
    this.foodList.push({
      name: food.name,
      date: food.date,
      qtd: food.qtd
    });
  }
}
