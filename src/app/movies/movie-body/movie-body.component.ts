import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../../shared/Movies';
import { IuserResponse } from '../../shared/userResponse';
import { ResponseService } from '../../services/response.service';
import { GenreService } from '../../services/genre.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
import { IGenre } from '../../shared/Genre';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { takeUntil } from 'rxjs/operators'; // for rxjs ^5.5.0 lettable operators
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-movie-body',
  templateUrl: './movie-body.component.html',
  styleUrls: ['./movie-body.component.css']
})
export class MovieBodyComponent implements OnInit, OnDestroy {
  pageId  : number;
  moviesResult : IMovie[] = []; 
  route_pargeId : number; 
  genreId : number;
  genres : IGenre[];
  movieType : string;
  private ngUnsubscribe = new Subject<void>();
  
  constructor(private _activeRoute: ActivatedRoute, 
              private responseService: ResponseService,
              private genreService : GenreService 
              )
          { 
            this.pageId=1;
          }
 
  ngOnInit() {
    this.getGenre();
    this._activeRoute.queryParamMap
    .subscribe(
      paramMap => {
        // console.log(paramMap);
        this.movieType = this._activeRoute.snapshot.url[0].path;
        // this.urlsegmant = this._activeRoute.params["pageId"];
        //  console.log( this.movieType);
        // this.genreId = this._activeRoute.snapshot.url[1].path;
      this.pageId= +paramMap.get('pageId');
      this.route_pargeId =this.pageId;
    })
    this.pageId = this.route_pargeId;
    this.checking();
  }
checking(){
  if(this.movieType==='popular'){
    this.getPopularMovies(+this.pageId);
  }
  else if(this.movieType==='top'){
    this.getTopRatedMovies(+this.pageId);
  }
  else if (this.movieType==='nowplaying'){
    this.getMoviePlaying(+this.pageId);
  }
  else if(this.movieType==="upcomming"){
    this.getUpcommingMovies(+this.pageId);
  }else if (this.movieType ==="genre"){
    this._activeRoute.params
    .subscribe( params => {
      if(params.id > 0){
        this.genreId = params.id;
        // console.log("params changed",params);
        this.getGenreMovies(+this.genreId,+this.pageId);
      }
    });
  }else{
    console.log("Wrong route");
  }
}
   increment(){
    this.pageId++;
    this.checking();
   }
   decrement(){
    this.pageId--;
    this.checking();
   }
   
   getPopularMovies(id : number ){
    this.responseService.getPopularMovies(+this.pageId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
   }
   getTopRatedMovies(id : number){
    this.responseService.getTopMovies(+this.pageId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
   }
   getMoviePlaying(id : number){
    this.responseService.getMoviePlaying(+this.pageId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
   }
   getGenreMovies( genreId: number, pageId : number){
    this.responseService.getGenreMovie(+genreId, +pageId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.moviesResult = response.results   
    );
   }
   getUpcommingMovies(pageId: number){
    this.responseService.getUpcommingMovies(+pageId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.moviesResult = response.results   
    );
   } 
   getGenre(){
    this.genreService.getGenreList()
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      res =>
      this.genres = res.genres   
    );
   }
    ngOnDestroy(){
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
   }
  }