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
  styleUrls: ['./restaurants-form.component.scss']
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
    chef: new FormControl(''),
    signatureDish: new FormControl(''),
    active: new FormControl(''),
  });

  constructor(private manageData: ManageDataService, private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.restaurantDetails.setValue({
      img: this.restaurant ? this.restaurant.img : '',
      name: this.restaurant ? this.restaurant.name : '',
      chef: this.restaurant ? this.restaurant.chefRef : '',
      signatureDish: this.restaurant ? this.restaurant.signatureDish : '',
      active: this.restaurant ? this.restaurant.active : true
    });
  }

  ngOnChanges(): void {
  }

  onSubmit = () => {
    if (!this.restaurant) {
      this.manageData.addItem('restaurants', this.restaurantDetails.value);
    } else {
      this.manageData.editItem(this.restaurant._id.toString(), 'restaurants', this.restaurantDetails.value);
    }
    this.closeForm();
  }

  closeForm = () => {
    this.hideForm.emit(true);
  }
}
