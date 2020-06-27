import { Injectable } from '@angular/core';

interface Food{
  name:  string;
  date: Date;
  qtd: string;
}

let valueCampos = {}

@Injectable({
  providedIn: 'root'
})
export class RegisterFoodService {
   indexCampo =0;
  foodList: Array<Food> = [];
  constructor() { }

  setIndex(index){
    this.indexCampo = index;
  }

   getIndex(index:any){
   let dados= this.foodList[index];
   return dados;
   }
  insertFood(food:Food){
    this.foodList.push({
      name: food.name,
      date: food.date,
      qtd: food.qtd
    });
  }
  updateFood(food:any, index:any){
    this.foodList.splice(index,1,food);

  }
}
