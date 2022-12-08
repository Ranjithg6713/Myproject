import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:User=new User();

  constructor(
    private loginservice:LoginService,
    private route:Router)
     { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.loginservice.loginUser(this.user).subscribe(data=>
      {
      console.log('Response from Backend',data)
      alert("Successfully User is Logged-In?")
      this.route.navigate(['/products']);
      },error=>alert("Sorry User not Logged-In"));
  }
  

}
