import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../../shared/Movies';
import { MoviesService } from '../../services/movies.service';
import { IuserResponse} from '../../shared/userResponse';
import { ResponseService } from '../../services/response.service';
// import { GenreService} from '../../services/genre.service';
import { ActivatedRoute, Route } from '@angular/router';
import { NgxPaginationModule} from  'ngx-pagination';
import { createWiresService } from 'selenium-webdriver/firefox';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
// import { IGenre } from '../../shared/Genre';
@Component({
  selector: 'app-movie-body',
  templateUrl: './movie-body.component.html',
  styleUrls: ['./movie-body.component.css']
})
export class MovieBodyComponent implements OnInit {

  // @Input() moviesResult : IMovie[] = [];
  // @Input()  pageId:number;
  // @Output() update = new EventEmitter<number>();
  pageId  : number;
  moviesResult : IMovie[] = [];
  // genres : IGenre[];
  // names : string[]=[];
  // p_pageId : number;  
  // create Event Emitter 
  route_pargeId : number; 
  constructor(private _activeRoute: ActivatedRoute, 
              private responseService: ResponseService,
              // private genreService : GenreService,
              private router : Router 
              )
          { 
            this.pageId=1;
          }
  
  ngOnInit() {
    
    this._activeRoute.queryParams
    .subscribe(params => {
      this.route_pargeId = params.pageId;
    })
    this.pageId = this.route_pargeId;
    this.getPopularMovies(+this.pageId); 
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
  //  getGenre(){
  //   this.genreService.getGenreList()
  //   .subscribe(
  //     res =>
  //     this.genres = res.genres   )
  //  }
  }