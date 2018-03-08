
import { Injectable, Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ISignUpResponse } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  temp : ISignUpResponse;
  // tokenParam : ITokenResponse;
  username : string;
  password : string; 
  confirmpassword : string; 
  message : string;
  constructor(private authService : AuthService, private router : Router) { 

    
    // console.log(this.temp.Message);
  }
  DoSignUp(){
    this.authService.signUp(this.username,this.password,this.confirmpassword )
    .subscribe(
      data =>
        this.temp = data
    );
  }

}
