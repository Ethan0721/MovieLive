import { IuserResponse, IcastResponse } from './../shared/userResponse';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { AppError } from '../shared/app.error';
import { NotFoundError } from '../shared/not.found.error';
import { IMovie } from '../shared/Movies';
import { IMovieGenre, IGenre } from '../shared/Genre';
import { BadInputError } from '../shared/bad.input.error';
import { ICast } from '../shared/Cast'; 
import 'rxjs/add/operator/take';

@Injectable()
// export class ResponseService extends AbstractBaseService<IuserResponse>{

    export class ResponseService {
    url : string = "https://api.themoviedb.org/3/movie/";
    api_token : string = "?api_key=e7ec5de68c5c7f163beab4e361e6245d";
    temp : any;
    constructor(private _http:HttpClient) {}

    getPopularMovies(pageid : number ): Observable<IuserResponse>{
        return this._http.get( this.url + "popular" + this.api_token + "&language=en-US&page=" + pageid)
        .retryWhen(errors=>errors.delay(5000))
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getTopMovies(pageid : number ): Observable<IuserResponse>{
        return this._http.get( this.url + "top_rated" + this.api_token + "&language=en-US&page=" + pageid)
        .retryWhen(errors=>errors.delay(5000))
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getUpcommingMovies(pageId:number) : Observable <IuserResponse>{
        return this._http.get(this.url+"upcoming"+this.api_token+"&language=en-US&page="+pageId)
        .retryWhen(errors=>errors.delay(5000))
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getMovieById(movieId : number ): Observable <IMovie>{
        return this._http.get(this.url+movieId+this.api_token)
        .retryWhen(errors=>errors.delay(5000))
        .map(resp => resp as IMovie)
        .catch(this.handleError);
    }
    getPlayingVideo(movieId : number) : Observable <IuserResponse>{
        return this._http.get(this.url+ movieId + '/videos' + this.api_token)
        .retryWhen(errors=>errors.delay(5000))
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getMoviePlaying(pageId : number):Observable<IuserResponse>{
        return this._http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=e7ec5de68c5c7f163beab4e361e6245d&language=en-US&page="+pageId)
        .retryWhen(errors=>errors.delay(5000))
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getGenreMovie(genreId : number, pageId : number):Observable<IuserResponse>{
        return this._http.get("https://api.themoviedb.org/3/discover/movie"+this.api_token+"&language=en-US&with_genres="+genreId +"&page="+pageId)
        .retryWhen(errors=>errors.delay(5000))
        .map(resp => resp as IuserResponse)
        .catch(this.handleError);
    }
    getCastMovie(movieId : number ):Observable<IcastResponse>{
        return this._http.get("https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key=e7ec5de68c5c7f163beab4e361e6245d")
        .retryWhen(errors=>errors.delay(5000))
        .map(res=> res )
        // .takeWhile((data)=>data.count<4) 
        .catch(this.handleError);
    }
    getSimilarMovie(movieId : number ) : Observable<IuserResponse>{
        return this._http.get("https://api.themoviedb.org/3/movie/"+movieId+"/similar?api_key=e7ec5de68c5c7f163beab4e361e6245d&language=en-US&page=1")
        .retryWhen(errors=>errors.delay(5000))
        .map(res=> res as IuserResponse)
        .catch(this.handleError);
    }
    private handleError(error: Response) {
        if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }
        // if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }
        
        if (error.status === 404) { return Observable.throw(new NotFoundError()); }
        return Observable.throw(new AppError(error));
    }
}