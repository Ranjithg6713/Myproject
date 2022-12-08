import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Observer } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
   baseUrl="http://localhost:8080/user/registration"
  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);

  }
}
