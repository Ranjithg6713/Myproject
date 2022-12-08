import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../register-user.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  user:User=new User();

  constructor(private registerService:RegisterUserService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>
      {
      alert("Successfully User is register?")
      },error=>alert("Sorry User not register"));
  }
}
