import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { IuserResponse } from '../shared/userResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppError } from '../shared/app.error';
import { NotFoundError } from '../shared/not.found.error';
import { IMovie } from '../shared/Movies';
import { IMovieGenre, IGenre } from '../shared/Genre';
import { BadInputError } from '../shared/bad.input.error';

@Injectable()
// export class ResponseService extends AbstractBaseService<IuserResponse>{

export class ResponseService {
    url : string = "https://api.themoviedb.org/3/movie/";
    api_token : string = "?api_key=e7ec5de68c5c7f163beab4e361e6245d";
    constructor(private _http:HttpClient) {}

    getPopularMovies(pageid : number ): Observable<IuserResponse>{
        return this._http.get( this.url + "popular" + this.api_token + "&language=en-US&page=" + pageid)
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getTopMovies(pageid : number ): Observable<IuserResponse>{
        return this._http.get( this.url + "top_rated" + this.api_token + "&language=en-US&page=" + pageid)
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getUpcommingMovies(pageId:number) : Observable <IuserResponse>{
        return this._http.get(this.url+"upcoming"+this.api_token+"&language=en-US&page="+pageId)
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getMovieById(movieId : number ): Observable <IMovie>{
        return this._http.get(this.url+movieId+this.api_token)
        .map(resp => resp as IMovie)
        .catch(this.handleError);
    }
    getPlayingVideo(movieId : number) : Observable <IuserResponse>{
        return this._http.get(this.url+ movieId + '/videos' + this.api_token)
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getMoviePlaying(pageId : number):Observable<IuserResponse>{
        return this._http.get(this.url+"now_playing"+this.api_token+"&language=en-US&page="+pageId)
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getGenreMovie(genreId : number, pageId : number){
        return this._http.get("https://api.themoviedb.org/3/discover/movie"+this.api_token+"&language=en-US&with_genres="+genreId +"&page="+pageId)
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
   
    
    private handleError(error: Response) {
        
        if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }

        // if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }
        
        if (error.status === 404) { return Observable.throw(new NotFoundError()); }
        return Observable.throw(new AppError(error));
    }
}