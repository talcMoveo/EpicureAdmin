import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Dish } from 'src/app/models/dish.model';
import { Restaurant } from 'src/app/models/restaurant.model';
import { GetDataService } from 'src/app/shared/get-data.service';
import { ManageDataService } from 'src/app/shared/manage-data.service';

@Component({
  selector: 'app-dishes-form',
  templateUrl: './dishes-form.component.html',
  styleUrls: ['./dishes-form.component.scss']
})
export class DishesFormComponent implements OnInit {
  @Input() newDish!: boolean;
  @Input() dish!: Dish | undefined;
  @Input() restaurants!: Restaurant[];
  @Output() hideForm = new EventEmitter<boolean>();

  dishDetails: FormGroup = new FormGroup({
    img: new FormControl(''),
    name: new FormControl(''),
    ingredients: new FormControl(''),
    price: new FormControl(''),
    tags: new FormControl(''),
    restaurantRef: new FormControl(''),
    active: new FormControl(''),
  });

  constructor(private manageData: ManageDataService, private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.dishDetails.setValue({
      img: this.dish ? this.dish.img : '',
      name: this.dish ? this.dish.name : '',
      ingredients: this.dish ? this.dish.ingredients : '',
      price: this.dish ? this.dish.price : '',
      tags: this.dish ? this.dish.tags : '',
      restaurantRef: this.dish ? this.dish.restaurantRef.name : '',
      active: this.dish ? this.dish.active : true,
    });
  }

  ngOnChanges(): void {
  }

  onSubmit = async () => {
    this.dishDetails.value.restaurantRef = await this.getRestaurantRef(this.dishDetails.value.restaurantRef);
    if (!this.dish) {
      this.manageData.addItem('dishes', this.dishDetails.value);
    } else {
      this.manageData.editItem(this.dish._id.toString(), 'dishes', this.dishDetails.value);
    }
    this.closeForm();
  }

  getRestaurantRef = (restaurantName: string): Restaurant | undefined => {
    let restaurantId: any;
    this.restaurants.forEach(restaurant => {
      if (restaurant.name === restaurantName) {
        restaurantId =  restaurant._id;
      }
    });
    return restaurantId;
  }

  closeForm = () => {
    this.hideForm.emit(true);
  }
}
