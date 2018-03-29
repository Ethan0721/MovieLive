import { ActivatedRoute } from '@angular/router';
import { IUserLogin, ITokenResponse, ISignUpResponse } from './../shared/interfaces';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { NotFoundError } from './../shared/not.found.error';
import { BadInputError } from './../shared/bad.input.error';
import { AppError } from './../shared/app.error';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthService {
  AccessToken : string = "";
  constructor(private http : HttpClient ) { 
  }

  // private TokenApi = 'https://api.themoviedb.org/3/authentication/token/new?api_key=e7ec5de68c5c7f163beab4e361e6245d';
    private signupUrl = 'http://localhost:59854/api/account/register';
    private signinUrl = 'http://localhost:59854/token';
    login(username : string, password : string) : Observable <ITokenResponse>{
  
    var headersForTokenApi = new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'});
    var data = 'grant_type=password&username=' + username + "&password=" + password;

    return this.http.post<ITokenResponse>(this.signinUrl,data, { headers : headersForTokenApi } ).catch(this.handleError)
    .map(resp => resp
    );
  }

  signUp(username : string, password : string, confirmpassword : string ) : Observable <ISignUpResponse>{
    var headersForTokenApi = new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'});
    var data = 'email=' + username + "&password=" + password + '&confirmPassword=' + confirmpassword;
    
    return this.http.post(this.signupUrl,data, { headers : headersForTokenApi } )
    .map(resp => resp as ISignUpResponse);
  }

  private handleError(error: Response) {
    if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }

    if (error.status === 404) { return Observable.throw(new NotFoundError()); }

    return Observable.throw(new AppError(error));
  }
}
