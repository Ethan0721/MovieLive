import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IMovie } from '../../shared/Movies';
import { ResponseService } from '../../services/response.service';
import { ICast } from '../../shared/Cast';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { takeUntil } from 'rxjs/operators'; // for rxjs ^5.5.0 lettable operators
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  animations: [
    // trigger('cast-card-animation', [
    //   state('small', style({
    //     transform: 'scale(1)',
    // })),
    //  state('large', style({
    //     transform: 'scale(1.2)',
    // })),
    // transition('small => large', animate('100ms ease-in')),
    // ]),
  ]
})
export class MovieDetailComponent implements OnInit {
  movieValue : number;
  movieDetail : IMovie;
  movieId :  number;
  base_url:string = "https://image.tmdb.org/t/p";
  base_back_drops : string = "https://image.tmdb.org/t/p/original";
  moviePlay : any;
  movieCast : ICast[] =[];
  similarMovie:IMovie[]=[];
  logo_path:string;
  movieColor='red';
  heartColor:boolean=false;
  private ngUnsubscribe = new Subject<void>();
  
  constructor(private _route: ActivatedRoute, private responseService: ResponseService) {}
  ngOnInit() {
    this.logo_path="../../assets/images/movie.png";
    this.movieId = this._route.snapshot.params['id'];
    
    this.responseService.getMovieById(this.movieId)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>{
      this.movieDetail = response,
      this.movieValue=this.movieDetail.vote_average*10
      if(this.movieValue>70){
        this.movieColor='#78C000';
      }else if (this.movieValue>50){
        this.movieColor='#d1d345';
      }else{
        this.movieColor='red';
        }
      }
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
  clickHeart(){
   this.heartColor = !this.heartColor;
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
