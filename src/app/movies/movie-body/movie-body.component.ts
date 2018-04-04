import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../../shared/Movies';
import { MoviesService } from '../../services/movies.service';
import { IuserResponse} from '../../shared/userResponse';
import { ResponseService } from '../../services/response.service';
import {GenreService} from '../../services/genre.service';
import { ActivatedRoute, Route } from '@angular/router';
import { NgxPaginationModule} from  'ngx-pagination';
import { createWiresService } from 'selenium-webdriver/firefox';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
import { IGenre } from '../../shared/Genre';

@Component({
  selector: 'app-movie-body',
  templateUrl: './movie-body.component.html',
  styleUrls: ['./movie-body.component.css']
})
export class MovieBodyComponent implements OnInit {
  pageId  : number;
  moviesResult : IMovie[] = []; 
  route_pargeId : number; 
  genreId : number;
  genres : IGenre[];
  movieType : string;
  constructor(private _activeRoute: ActivatedRoute, 
              private responseService: ResponseService,
              private router : Router,
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
       console.log( this.movieType);
      // this.genreId = this._activeRoute.snapshot.url[1].path;
      this.pageId= +paramMap.get('pageId');
      this.route_pargeId =this.pageId;
    })
    this.pageId = this.route_pargeId;
    if(this.movieType==='popular'){
      this.getPopularMovies(+this.pageId); 
    }
    else if (this.movieType ==="top"){
      this.getTopRatedMovies(+this.pageId);
    }
    else if (this.movieType ==="nowplaying"){
      this.getMoviePlaying(+this.pageId);
    }
    else if (this.movieType ==="genre"){
    this._activeRoute.params
    .subscribe( params => {
      if(params.id > 0){
        this.genreId = params.id;
        console.log("params changed",params);
        this.getGenreMovies(+this.genreId,+this.pageId);
      }
    });
    }
  }
   increment(){
    this.pageId++;
    this.getPopularMovies(+this.pageId);
   }
   decrement(){
    this.pageId--;
    this.getPopularMovies(+this.pageId);
   }
   
   getPopularMovies(id : number ){
    this.responseService.getPopularMovies(+this.pageId)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
   }
   getTopRatedMovies(id : number){
    this.responseService.getTopMovies(+this.pageId)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
   }
   getMoviePlaying(id : number){
    this.responseService.getMoviePlaying(+this.pageId)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
   }
   getGenreMovies( genreId: number, pageId : number){
    this.responseService.getGenreMovie(+genreId, +pageId)
    .subscribe(
      response =>
      this.moviesResult = response.results   
    );
   }
   getGenre(){
    this.genreService.getGenreList()
    .subscribe(
      res =>
      this.genres = res.genres   
    );
   }
  }