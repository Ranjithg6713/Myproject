import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Observer } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:8080/user/login"
  constructor(private httpClient:HttpClient) { }

  loginUser(user:User){
    console.log(user);
    return this.httpClient.post<User>(`${this.baseUrl}`,user);
}
}
