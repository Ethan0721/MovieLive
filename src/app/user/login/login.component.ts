import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService} from '../../services/auth.service';
import { ITokenResponse} from '../../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private router : Router, private authSevice : AuthService) { }
    tokenParam : ITokenResponse;
    username : string;
    password : string; 
    isLogin : boolean = false;
    errorMessage  = "";
    isLoginError : boolean = false;
  ngOnInit() {
  }
  OnSubmit(userName, Password){
    this.authSevice.loginUser(userName, Password)
    .subscribe((data:any)=> 
    {
      localStorage.setItem("userToken",data.access_token);
      this.isLogin=true;
      // this.authSevice.changeStatus(this.isLogin);
      // console.log(this.authSevice.currentStatus);
    
    },
      error => {
        this.isLoginError=true;
        this.errorMessage=error
      },
      ()=>{
        this.router.navigate(['/']);
      }
    );
    // this.isLogin();
    // console.log(this.tokenParam.access_token);
  }
}
