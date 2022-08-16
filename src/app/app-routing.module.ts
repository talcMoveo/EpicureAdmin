import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefsComponent } from './chefs/chefs.component';
import { DishesComponent } from './dishes/dishes.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: 'chefs', pathMatch: 'full' },
  { path: 'chefs', component: ChefsComponent },
  { path: 'dishes', component: DishesComponent },
  { path: 'restaurants', component: RestaurantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
