import { Component, OnInit } from '@angular/core';
import { Chef } from './models/chef.model';
import { Dish } from './models/dish.model';
import { Restaurant } from './models/restaurant.model';
import { GetDataService } from './shared/get-data.service';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tableToShow: string = 'none';
  tableTypes: string[] = ['chefs', 'restaurants', 'dishes'];

  chefsTableShown: boolean = false;
  dishesTableShown: boolean = false;
  restaurantsTableShown: boolean = false;

  chefs: Chef[] = [];
  restaurants: Restaurant[] = [];
  dishes: Dish[] = [];
  
  constructor(private dataService: GetDataService, private router: AppRoutingModule) { };

  ngOnInit() {
    this.dataService.getData().subscribe((res: any) => {
      // console.log('res: ', res.dishes);
      this.chefs = res.chefs;
      this.restaurants = res.restaurants;
      this.dishes = res.dishes;
    });
  }

  showTable = (type: string) => {

  }

  showChefsTable = () => {
    this.chefsTableShown = true;
  }
  
  showResTable = () => {
    this.dishesTableShown = true;
  }
  
  showDishesTable = () => {
    this.restaurantsTableShown = true;
  }

}
