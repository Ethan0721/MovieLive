import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../../shared/Movies';
import { ResponseService } from '../../services/response.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetail : any;
  movieId :  number;
  moviePlay : any;
  constructor(private _route: ActivatedRoute, private responseService: ResponseService) {
    this.movieId = this._route.snapshot.params['id'];
    
    responseService.getMovieById(this.movieId)
    .subscribe(
      response =>
      this.movieDetail = response
    );
    
    responseService.getPlayingVideo(this.movieId)
    .subscribe(
      response =>
      this.moviePlay = response.results[0]
    );
  }
  ngOnInit() {
  }
}
