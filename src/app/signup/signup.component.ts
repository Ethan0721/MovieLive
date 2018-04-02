
import { Injectable, Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ISignUpResponse } from '../shared/interfaces';
import { Router } from '@angular/router';
import { IUser} from '../shared/User'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  temp : ISignUpResponse;
  // tokenParam : ITokenResponse;
 
  message : string;
  userList : IUser[] = [];
  errorMessage  = "";
  constructor(private authService : AuthService, private router : Router) { 
   

  }
  // DoSignUp(){
  //   this.authService.signUp(this.userList,this.password,this.confirmpassword )
  //   .subscribe(
  //     data =>
  //       this.temp = data
  //   );
  // }
  addUser(form){
    // console.log(form.value.username);
    // console.log(form.value.password);
    this.authService.signUp(form.value.username,form.value.password,form.value.confirmpassword)
    .subscribe(
      data => this.temp=data,
      error => this.errorMessage=error,
      () => this.router.navigate(['/login'])
    )
  }
}
