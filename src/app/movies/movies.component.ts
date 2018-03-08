import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { IMovie } from '../shared/Movies';
import { ActivatedRoute, Route } from '@angular/router';
import { ResponseService } from '../services/response.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  moviesResult : IMovie[] = [];
  ngOnInit() {}
  constructor(private responseService: ResponseService) { 
      responseService.getAllMovies().subscribe(
      response =>
      this.moviesResult = response.results
    );
  }
  getMovies() : any{
    return this.moviesResult;
  }
}
