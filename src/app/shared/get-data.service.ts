import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  rest_api: string = 'http://localhost:3000/api/v1';
  // httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getData() {
    return(this.http.get(`${this.rest_api}/search`));
  }
  
  getChefs() {
    return(this.http.get(`${this.rest_api}/chefs`));
  }

  getDishes() {
    return(this.http.get(`${this.rest_api}/dishes`));
  }

  getRestaurants() {
    return(this.http.get(`${this.rest_api}/restaurants`));
  }
}
