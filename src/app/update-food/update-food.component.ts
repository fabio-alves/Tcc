import { Component, OnInit } from '@angular/core';
import { RegisterFoodService } from '../register-food.service'
import { AlertController } from '@ionic/angular';

 
@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.scss'],
})
export class UpdateFoodComponent implements OnInit {

  constructor(public alertController: AlertController, public registerFoodService: RegisterFoodService) { }
  dado ={}
  ngOnInit() {
    let campos = this.registerFoodService.getIndex(this.registerFoodService.indexCampo)
    this.dado = {name:campos.name,
            qtd:campos.qtd,
            data:campos.date}  
  }
  async presentAlert(nome:string, qtd:any, data:any) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: '',
      message: 'O Alimento foi Alterado com sucesso',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    let food = {name:nome,
            date:data,
            qtd:qtd
    };
    this.registerFoodService.updateFood(food, this.registerFoodService.indexCampo);
    
    console.log("TOMARA QUE SIM",food);
    console.log(this.registerFoodService.foodList)
  }
}
