import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Chef } from '../models/chef.model';
import { Dish } from '../models/dish.model';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() type: string = '';
 
  chefsKeys: string[] = ['image', 'name', 'description', 'active'];
  dishesKeys: string[] = ['image', 'name', 'ingredients', 'price', 'restaurant', 'tags', 'active'];
  restaurantsKeys: string[] = ['image', 'name', 'chef', 'rating', 'signature dish', 'active'];
  keys: string[] = [];

  imagesRes: any = {
    Lumina: "https://i.ibb.co/0Yq0xvQ/Lumina.png",
    Claro: "https://i.ibb.co/vsFg88S/claro.png",
    "Kitchen Market": "https://i.ibb.co/xhmZvwJ/kitchen-Market.png",
    Mashya: "https://i.ibb.co/5jQjNmQ/mashya.png",
    Onza: "https://i.ibb.co/8cdVLWq/onza.png",
    "Tiger Lily": "https://i.ibb.co/Wyp6sbV/tiger-lily.png",
    "Smoked Pizza": "https://i.ibb.co/0YS9wnK/Smoked-Pizza.png",
    "Pad Ki Mao": "https://i.ibb.co/0KZb96R/PadKiMao.png",
    "Garbanzo Frito": "https://i.ibb.co/SQsZ8np/Garbanzo-Frito.png",
    "Yossi Shitrit": "https://i.ibb.co/Ytv0Q83/yossi-shitrit.png",
  };

  constructor() {
  }

  ngOnInit(): void {
    if (this.type == 'chefs') {
      this.keys = this.chefsKeys;
    } else if (this.type == 'dishes') {
      this.keys = this.dishesKeys;
    } else {
      this.keys = this.restaurantsKeys;
    }
  }
  
  ngOnChanges(): void {
    console.log(this.data);
  }
  
  // arrangeKeys = () => {
  //   if (this.chefs.length > 0) {
  //     this.chefsKeys = Object.keys(this.chefs[0]);
  //     this.chefsKeys.splice(this.chefsKeys.indexOf('_id'), 1);
  //     this.chefsKeys.splice(this.chefsKeys.indexOf('__v'), 1);
  //   }
    
  //   if (this.dishes.length > 0) {
  //     this.dishesKeys = Object.keys(this.dishes[0]);
  //     this.dishesKeys.splice(this.dishesKeys.indexOf('_id'), 1);
  //   }
    
  //   if (this.restaurants.length > 0) {
  //     this.restaurantsKeys = Object.keys(this.restaurants[0]);
  //     this.restaurantsKeys.splice(this.restaurantsKeys.indexOf('_id'), 1);
  //     this.restaurantsKeys.splice(this.restaurantsKeys.indexOf('popular'), 1);
  //   }
  // }

  editItem = (item: Dish | Restaurant | Chef) => {
    console.log(item);
  }

  deleteItem = (item: Dish | Restaurant | Chef) => {
    console.log(item);
  }

}
