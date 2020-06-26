import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PantryComponent } from './pantry/pantry.component';
import { RegisterFoodComponent } from './register-food/register-food.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    
  },
  {path:'pantry', component: PantryComponent},
  {path:'registerFood', component: RegisterFoodComponent},
  {path:'shoppingList', component: ShoppingListComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
