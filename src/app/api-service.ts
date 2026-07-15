import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
  return this.http.get('https://dummyjson.com/recipes');
}

getProductdetails(id: number) {
  return this.http.get(`https://dummyjson.com/recipes/${id}`);
}
}