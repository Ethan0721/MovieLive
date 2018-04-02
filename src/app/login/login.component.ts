import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService} from '../services/auth.service';
import { ITokenResponse} from '../shared/interfaces';
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
  ngOnInit() {
  }
  Dologin(){
    this.authSevice.login(this.username, this.password)
    .subscribe( 
      data => this.tokenParam=data,
      error => this.errorMessage=error,
      ()=>this.router.navigate(['/'])
    );
    // this.isLogin();
    // console.log(this.tokenParam.access_token);
  }
  // DoLogin() : void {
  //   this.authSevice.login(this.username, this.password)
  //   .subscribe(
  //     data => {
  //       this.tokenParam = data;
  //       this.authSevice.AccessToken = this.tokenParam.request_token;
  //       console.log(this.authSevice.AccessToken);
  //     }
  //   );
  // }
}
