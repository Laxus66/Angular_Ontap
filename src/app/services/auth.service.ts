import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignIn, ISignUp } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  signIn(user: ISignIn): Observable<ISignIn[]> {
    return this.http.post<ISignIn[]>(`http://localhost:3000/users`, user)
  }
  signUp(user: ISignUp): Observable<ISignUp[]> {
    return this.http.post<ISignUp[]>(`http://localhost:3000/users`, user)
  }
}
