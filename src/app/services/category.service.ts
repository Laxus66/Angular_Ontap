import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  getAllcategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:3000/category`)
  }
  getOnecategory(id: number | string): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://localhost:3000/category/${id}`)
  }
  addCategory(category: ICategory): Observable<ICategory[]> {
    return this.http.post<ICategory[]>(`http://localhost:3000/category`, category)
  }
  updateCategory(category: ICategory): Observable<ICategory[]> {
    return this.http.put<ICategory[]>(`http://localhost:3000/category/${category.id}`, category)
  }
  deleteCategory(id: number | string): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`http://localhost:3000/category/${id}`)
  }
}
