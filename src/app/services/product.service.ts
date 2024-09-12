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
  
  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${productId}`)
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/products/add`, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/products/${id}`);
  }

  // Add a comment to a specific product
  addComment(productId: number, commentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products/${productId}/comments/add`, commentData);
  }
}
