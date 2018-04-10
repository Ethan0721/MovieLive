import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IMovie } from '../../shared/Movies';
import { ResponseService } from '../../services/response.service';
import { ICast } from '../../shared/Cast';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators'; // for rxjs ^5.5.0 lettable operators
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetail : IMovie;
  movieId :  number;
  base_url:string = "https://image.tmdb.org/t/p/w780";
  moviePlay : any;
  movieCast : ICast[] =[];
  similarMovie:IMovie[]=[];
  private ngUnsubscribe = new Subject<void>();
  
  constructor(private _route: ActivatedRoute, private responseService: ResponseService) {}
  ngOnInit() {
    this.movieId = this._route.snapshot.params['id'];
    
    this.responseService.getMovieById(this.movieId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.movieDetail = response
    );
    
    this.responseService.getPlayingVideo(this.movieId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.moviePlay = response.results[0]
    );
    
    this.responseService.getCastMovie(this.movieId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      res =>{
      this.movieCast = res.cast
      }
    );

    // this.responseService.getSimilarMovie(this.movieId)
    // .subscribe(
    //   res=>
    //   this.similarMovie = res.results
    // );
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
