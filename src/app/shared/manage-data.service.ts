import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chef } from '../models/chef.model';
import { Dish } from '../models/dish.model';
import { Restaurant } from '../models/restaurant.model';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  rest_api: string = 'http://localhost:3000/api/v1';

  constructor(private dataService: GetDataService, private http: HttpClient) { }

  editItem = (item: Chef | Restaurant | Dish, type: string) => {
    // open editor popup
  }

  deleteItem = (item: Chef | Restaurant | Dish, type: string) => {
    console.log(`${this.rest_api}/${type}/${item._id}`);
    return(this.http.delete(`${this.rest_api}/${type}/${item._id}`).subscribe((res) => {
      console.log('res: ', res);
    }));
  }
}
