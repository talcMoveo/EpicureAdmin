import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  rest_api: string = 'http://localhost:3000/api/v1';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  addItem = (collection: string, newData: any) => {
    return(this.http.post(`${this.rest_api}/${collection}`, newData).subscribe((res) => {
    }));
  }

  editItem = (id: string, collection: string, newData: any) => {
    return(this.http.patch(`${this.rest_api}/${collection}/${id}`, newData).subscribe((res) => {
    }));
  }

  deleteItem = (id: string, collection: string) => {
    return(this.http.delete(`${this.rest_api}/${collection}/${id}`).subscribe((res) => {
    }));
  }
}
