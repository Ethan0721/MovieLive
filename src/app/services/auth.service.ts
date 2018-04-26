import { ActivatedRoute } from '@angular/router';
import { IUserLogin, ITokenResponse, ISignUpResponse } from './../shared/interfaces';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { NotFoundError } from './../shared/not.found.error';
import { BadInputError } from './../shared/bad.input.error';
import { AppError } from './../shared/app.error';
import { Router} from "@angular/router";
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { User } from '../shared/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  // AccessToken : string = "";
  constructor(private http : HttpClient, private router: Router ) { 
  }

  private rootUrl = 'http://localhost:50083';

  // private checkLogin = new BehaviorSubject<boolean>(false);
  // currentStatus = this.checkLogin.asObservable();  
  
  
  loginUser(username : string, password : string) : Observable <ITokenResponse>{
      var data = 'username=' + username + "&password=" + password+"&grant_type=password";
      var headersForTokenApi = new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'});
      
      return this.http.post<ITokenResponse>(this.rootUrl+"/token", data, { headers : headersForTokenApi } )
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
      LastName : user.LastName,
      Points:user.Points
    };
    return this.http.post(this.rootUrl +"/api/User/Register", body);
  }
  
  getUserClaims() {
   return this.http.get(this.rootUrl+"/api/GetUserClaims", 
    { headers : new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('userToken')})});
  }
  
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
