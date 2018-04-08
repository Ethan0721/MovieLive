import { Injectable } from '@angular/core';
import { IGenre } from '../shared/Genre';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { IuserResponse } from '../shared/userResponse';
import {HttpClient, HttpParams} from '@angular/common/http';
// import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});
@Injectable()
export class FilterService {
  
  url : string = "https://api.themoviedb.org/3/movie/";
  api_token : string = "?api_key=e7ec5de68c5c7f163beab4e361e6245d";
  constructor(private http: HttpClient) {}

  // search(term: string) {
  //   if (term === '') {
  //     return of([]);
  //   }
  //   return this.http  
  //   .get(WIKI_URL, {params: PARAMS.set('search', term)})
  //     .map(response => response[1]);
  // }
  search(term: string):Observable<IuserResponse>{
    
    // if (term === '') {
    //   return;
    // }
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=e7ec5de68c5c7f163beab4e361e6245d&language=en-US&query="+term+"&page=1"
    ).map(resp => resp as IuserResponse)
  }
}
