import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`)
  }
}
