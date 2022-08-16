import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { Restaurant } from '../models/restaurant.model';
import { GetDataService } from '../shared/get-data.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['../shared/form-styling.component.scss']
})
export class DishesComponent implements OnInit {
  dishes!: any;
  keys: string[] = ['image', 'name', 'ingredients', 'price', 'tags', 'restaurantRef', 'active'];
  currentDish!: Dish | undefined;
  restaurants!: any;

  showForm: boolean = false;

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getDishes().subscribe((res) => {
      this.dishes = res;
    });
  }

  handleAddDish = async () => {
    await this.getRestaurants();
    this.currentDish = undefined;
    this.showForm = !this.showForm;
  }

  openForm = async (event: any) => {
    await this.getRestaurants();
    this.currentDish = event;
    this.showForm = !this.showForm;
  }

  getRestaurants = () => {
    this.getDataService.getRestaurants().subscribe((res) => {
      this.restaurants = res;
    });
  }

  closeForm = () => {
    this.showForm = false;
    this.refreshData();
  }

  refreshData = () => {
    this.getDataService.getDishes().subscribe((res) => {
      this.dishes = res;
    })
  }
}
