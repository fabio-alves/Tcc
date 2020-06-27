import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { PantryComponent} from './pantry/pantry.component';
import { RegisterFoodComponent} from './register-food/register-food.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UpdateFoodComponent} from './update-food/update-food.component';

@NgModule({
  declarations: [AppComponent, PantryComponent, RegisterFoodComponent, ShoppingListComponent, UpdateFoodComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
