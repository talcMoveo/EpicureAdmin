import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish.model';
import { GetDataService } from '../shared/get-data.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dishes!: any;
  keys: string[] = ['image', 'name', 'ingredients', 'price', 'tags', 'restaurantRef', 'active'];
  currentDish!: Dish | undefined;

  showForm: boolean = false;

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getDishes().subscribe((res) => {
      this.dishes = res;
      console.log(res);
    });
  }

  handleAddDish = () => {
    this.currentDish = undefined;
    this.showForm = !this.showForm;
  }

  openForm = (event: any) => {
    this.currentDish = event;
    this.showForm = !this.showForm;
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
