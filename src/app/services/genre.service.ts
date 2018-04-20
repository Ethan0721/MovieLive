import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { IuserResponse } from '../shared/userResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppError } from '../shared/app.error';
import { NotFoundError } from '../shared/not.found.error';
import { IMovie } from '../shared/Movies';
import { IMovieGenre, IGenre } from '../shared/Genre';

@Injectable()
export class GenreService {
    genre_list = "https://api.themoviedb.org/3/genre/movie/list?api_key=e7ec5de68c5c7f163beab4e361e6245d"
    url = 'https://api.themoviedb.org/3/discover/movie?api_key=e7ec5de68c5c7f163beab4e361e6245d&language=en-US';
    // &with_genres=12&page=2';
    api_token = "?api_key=e7ec5de68c5c7f163beab4e361e6245";
    constructor(private _http:HttpClient){}
   
  
    getGenreList(): Observable <IMovieGenre>{
        return this._http.get(this.genre_list).retry(3)
        .map(resp => resp as IMovieGenre)
        .catch(this.handleError);  
    }

    private handleError(error: Response) {
        // if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }
        if (error.status === 404) { return Observable.throw(new NotFoundError()); }
        return Observable.throw(new AppError(error));
    }
}