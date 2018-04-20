import { ActivatedRoute } from '@angular/router';
import { IUserLogin, ITokenResponse, ISignUpResponse } from './../shared/interfaces';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { NotFoundError } from './../shared/not.found.error';
import { BadInputError } from './../shared/bad.input.error';
import { AppError } from './../shared/app.error';
import {Router} from "@angular/router";
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { User } from '../shared/user.model';
@Injectable()
export class AuthService {
  AccessToken : string = "";
  constructor(private http : HttpClient, private router: Router ) { 
  }

  // private TokenApi = 'https://api.themoviedb.org/3/authentication/token/new?api_key=e7ec5de68c5c7f163beab4e361e6245d';
    private signupUrl = 'http://localhost:50083';
    private signinUrl = 'http://localhost:50083/token';
    
    
    login(username : string, password : string) : Observable <ITokenResponse>{
    var headersForTokenApi = new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'});
    var data = 'grant_type=password&username=' + username + "&password=" + password;

    return this.http.post<ITokenResponse>(this.signinUrl,data, { headers : headersForTokenApi } )
    .map(resp => resp)
    .catch(this.handleError);
  }

  registerUser(user : User){
    console.log("user :"+user.Email);
    const body : User = {
      UserName : user.UserName,
      Password : user.Password,
      Email: user.Email,
      FirstName : user.FirstName,
      LastName : user.LastName
    }
    return this.http.post(this.signupUrl +"/api/User/Register", body);
  }
  // signUp(user : IUser ) : Observable <ISignUpResponse>{
  //   var headersForTokenApi = new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'});
    
  //   var data = 'email=' + user.email + "&password=" + user.password + '&confirmPassword=' + user.confirmpassword;
    
  //   return this.http.post(this.signupUrl,data, { headers : headersForTokenApi } )
  //   .map(resp => resp as ISignUpResponse)
  //   .catch(this.handleError);
  // }

private handleError(error: Response) {
    
    if (error.status === 400) {
      let errorMessage = "Email already be registered, plase change a different name";
      return Observable.throw(errorMessage);
    }
    if (error.status === 404) {
      let errorMessage = ""
      //  return Observable.throw(new NotFoundError());
      return Observable.throw(errorMessage);
      }

    
    return Observable.throw(new AppError(error));
  }
}
