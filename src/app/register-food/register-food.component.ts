import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegisterFoodService } from '../register-food.service'


@Component({
  selector: 'app-register-food',
  templateUrl: './register-food.component.html',
  styleUrls: ['./register-food.component.scss'],
})
export class RegisterFoodComponent implements OnInit {

  constructor(public alertController: AlertController, public registerFoodService: RegisterFoodService) { }

  async presentAlert(nome:string, qtd:any, data:any) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: '',
      message: 'O Alimento foi SALVO com sucesso',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    let food = {name:nome,
            date:data,
            qtd:qtd
    };
    this.registerFoodService.insertFood(food);
    console.log("TOMARA QUE SIM",food);
    console.log(this.registerFoodService.foodList)
  }
  ngOnInit() {}

}
