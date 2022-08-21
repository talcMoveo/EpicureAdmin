import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chef } from 'src/app/models/chef.model';
import { Dish } from 'src/app/models/dish.model';
import { Restaurant } from 'src/app/models/restaurant.model';
import { GetDataService } from 'src/app/shared/get-data.service';
import { ManageDataService } from 'src/app/shared/manage-data.service';

@Component({
  selector: 'app-restaurants-form',
  templateUrl: './restaurants-form.component.html',
  styleUrls: ['../../shared/form-styling.component.scss']
})
export class RestaurantsFormComponent implements OnInit {
  @Input() newRestaurant!: boolean;
  @Input() restaurant!: Restaurant | undefined;
  @Input() chefs!: Chef[];
  @Input() signatureDishes!: Dish[];
  @Output() hideForm = new EventEmitter<boolean>();

  restaurantDetails: FormGroup = new FormGroup({
    img: new FormControl(''),
    name: new FormControl(''),
    chefRef: new FormControl(''),
    signatureDish: new FormControl(''),
    active: new FormControl(''),
  });

  constructor(private manageData: ManageDataService, private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.restaurantDetails.setValue({
      img: this.restaurant ? this.restaurant.img : '',
      name: this.restaurant ? this.restaurant.name : '',
      chefRef: this.restaurant ? this.restaurant.chefRef : '',
      signatureDish: this.restaurant ? this.restaurant.signatureDish : '',
      active: this.restaurant ? this.restaurant.active : true
    });
  }

  ngOnChanges(): void {
  }

  onSubmit = async () => {
    this.restaurantDetails.value.chefRef = await this.getChefRef(this.restaurantDetails.value.chefRef);
    this.restaurantDetails.value.signatureDish = await this.getDishRef(this.restaurantDetails.value.signatureDish);
    if (!this.restaurant) {
      this.manageData.addItem('restaurants', this.restaurantDetails.value);
    } else {
      this.manageData.editItem(this.restaurant._id.toString(), 'restaurants', this.restaurantDetails.value);
    }
    this.closeForm();
  }

  getChefRef = (chefName: string): string | number | undefined => {
    let chefId: string | number | undefined;
    this.chefs.forEach(chef => {
      if (chef.name === chefName) {
        chefId =  chef._id;
      }
    });
    return chefId;
  }

  getDishRef = (dishName: string): string | number | undefined => {
    let dishId: string | number | undefined;
    this.signatureDishes.forEach(dish => {
      if (dish.name === dishName) {
        dishId =  dish._id;
      }
    });
    return dishId;
  }

  closeForm = () => {
    this.hideForm.emit(true);
  }
}
