import { Injectable, OnInit } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { IMovie } from '../shared/Movies';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { IuserResponse } from '../shared/userResponse';


@Injectable()
export class MoviesService {

 //private postUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=8a0ef7867cdaf529f3eb1e2a63d54384&language=en-US&page=1';
  // private _webUrl = 'https://api.themoviedb.org/3';
  // private _movies = '/movie/3?';
  // private _apiKey ='api_key=8a0ef7867cdaf529f3eb1e2a63d54384';
  // movieId : number; 
  constructor( public _http : HttpClient) { 
    // super(_http, 'https://api.themoviedb.org/3/movie/'+ this.movieId +'?api_key=8a0ef7867cdaf529f3eb1e2a63d54384&language=en-US');
}
//   OnInit(){
// }
getMovieById(movieId: number) : Observable <IuserResponse[]>{
  return this._http.get('https://api.themoviedb.org/3/movie/'+ movieId +'?api_key=8a0ef7867cdaf529f3eb1e2a63d54384&language=en-US')
  .map(resp => resp as IuserResponse[]);
}
  // return this._http.get(`${this.actionUrl}${id}`)
  // .map(resp => resp as T)
  // .catch(this.handleError);

}
