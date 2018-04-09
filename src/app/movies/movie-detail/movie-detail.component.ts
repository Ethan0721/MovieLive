import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IMovie } from '../../shared/Movies';
import { ResponseService } from '../../services/response.service';
import { ICast } from '../../shared/Cast';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetail : IMovie;
  movieId :  number;
  moviePlay : any;
  movieCast : ICast[] =[];
  similarMovie:IMovie[]=[];
  constructor(private _route: ActivatedRoute, private responseService: ResponseService) {}
  ngOnInit() {
    this.movieId = this._route.snapshot.params['id'];
    
    this.responseService.getMovieById(this.movieId)
    .subscribe(
      response =>
      this.movieDetail = response
    );
    
    this.responseService.getPlayingVideo(this.movieId)
    .subscribe(
      response =>
      this.moviePlay = response.results[0]
    );
    
    this.responseService.getCastMovie(this.movieId)
    .subscribe(
      res =>{
      this.movieCast = res.cast
      }
    );

    this.responseService.getSimilarMovie(this.movieId)
    .subscribe(
      res=>
      this.similarMovie = res.results
    );
  }
}
