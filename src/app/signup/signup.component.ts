
import { Injectable, Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ISignUpResponse } from '../shared/interfaces';
import { Router } from '@angular/router';
import { User} from '../shared/user.model'; 
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  temp : ISignUpResponse;
  // tokenParam : ITokenResponse;
 
  message : string;
  user : User;
  errorMessage  = "";
  constructor(private authService : AuthService, private router : Router) { 
  }
  ngOnInit(){
    this.resetForm();
  }
  // DoSignUp(){
  //   this.authService.signUp(this.userList,this.password,this.confirmpassword )
  //   .subscribe(
  //     data =>
  //      
  //   );
  // }
  resetForm(form?: NgForm){
    if(form != null) 
      form.reset();
    this.user = {
      UserName: "",
      Password: "",
      Email: "",
      FirstName: "",
      LastName: ""
    }
  }
  OnSubmit(form: NgForm){

    console.log(form.value);
    this.authService.registerUser(form.value)
    .subscribe(
      (data:any) =>{
        this.resetForm(form);   
      //  error=>this.errorMessage=error;
      //  ()=>this.router.navigate(['/login'])
    }
    
      // error => this.errorMessage=error,
      // () => this.router.navigate(['/login'])
    );
  }
}
