import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { GetDataService } from '../shared/get-data.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['../shared/form-styling.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants!: any;
  keys: string[] = ['image', 'name', 'rating', 'chefRef', 'popular', 'signatureDish', 'active'];
  currentRestaurant!: Restaurant | undefined;
  chefs!: any;
  dishes!: any;

  showForm: boolean = false;

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getRestaurants().subscribe((res) => {
      this.restaurants = res;
    });
  }

  handleAddRestaurant = async () => {
    await this.getData();
    this.currentRestaurant = undefined;
    this.showForm = !this.showForm;
  }

  openForm = async (event: any) => {
    await this.getData();
    this.currentRestaurant = event;
    this.showForm = !this.showForm;
  }

  getData = () => {
    this.getDataService.getChefs().subscribe((res) => {
      this.chefs = res;
    });
    this.getDataService.getDishes().subscribe((res) => {
      this.dishes = res;
    })
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
