import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { IuserResponse } from '../shared/userResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppError } from '../shared/app.error';
import { NotFoundError } from '../shared/not.found.error';
import { IMovie } from '../shared/Movies';
@Injectable()
// export class ResponseService extends AbstractBaseService<IuserResponse>{

export class ResponseService {

constructor(private _http:HttpClient) {
// super(_http, "https://api.themoviedb.org/3/movie/popular?api_key=8a0ef7867cdaf529f3eb1e2a63d54384&language=en-US&page=1");
    }

    getAllMovies(): Observable<IuserResponse>{
        return this._http.get("https://api.themoviedb.org/3/movie/popular?api_key=e7ec5de68c5c7f163beab4e361e6245d&page=1")
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getMovieById(movieId : number ): Observable <IMovie>{
        return this._http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=e7ec5de68c5c7f163beab4e361e6245d')
        .map(resp => resp as IMovie)
        .catch(this.handleError);
    }
    getMoviePlay(movieId : number) : Observable <IuserResponse>{
        return this._http.get('http://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=e7ec5de68c5c7f163beab4e361e6245d')
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        // if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }
        if (error.status === 404) { return Observable.throw(new NotFoundError()); }
        return Observable.throw(new AppError(error));
    }
}