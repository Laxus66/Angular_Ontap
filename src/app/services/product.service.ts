import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`)
  }
  getOneProduct(id: number | string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`http://localhost:3000/products`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.put<IProduct[]>(`http://localhost:3000/products/${product.id}`, product)
  }
  deleteProduct(id: number | string): Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(`http://localhost:3000/products/${id}`)
  }
}
