import { Component, OnInit } from '@angular/core';
import { Chef } from './models/chef.model';
import { Dish } from './models/dish.model';
import { Restaurant } from './models/restaurant.model';
import { GetDataService } from './shared/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableToShow: string = '';
  tableTypes: string[] = ['chefs', 'restaurants', 'dishes'];

  chefs: Chef[] = [];
  restaurants: Restaurant[] = [];
  dishes: Dish[] = [];
  
  constructor(private dataService: GetDataService) { };

  ngOnInit() {
    this.dataService.getData().subscribe((res: any) => {
      console.log('res: ', res.dishes);
      this.chefs = res.chefs;
      this.restaurants = res.restaurants;
      this.dishes = res.dishes;
    });
  }
}
