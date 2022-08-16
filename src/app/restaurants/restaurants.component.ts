import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { GetDataService } from '../shared/get-data.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants!: any;
  keys: string[] = ['image', 'name', 'rating', 'chefRef', 'popular', 'signatureDish', 'active'];
  currentRestaurant!: Restaurant | undefined;

  showForm: boolean = false;

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getRestaurants().subscribe((res) => {
      this.restaurants = res;
      console.log(res);
    });
  }

  handleAddRestaurant = () => {
    this.currentRestaurant = undefined;
    this.showForm = !this.showForm;
  }

  openForm = (event: any) => {
    this.currentRestaurant = event;
    this.showForm = !this.showForm;
  }

  closeForm = () => {
    this.showForm = false;
    this.refreshData();
  }

  refreshData = () => {
    this.getDataService.getRestaurants().subscribe((res) => {
      this.restaurants = res;
    })
  }
}
