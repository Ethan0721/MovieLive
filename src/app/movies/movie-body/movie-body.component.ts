import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../shared/Movies';

@Component({
  selector: 'app-movie-body',
  templateUrl: './movie-body.component.html',
  styleUrls: ['./movie-body.component.css']
})
export class MovieBodyComponent implements OnInit {

  movies : IMovie[];
  
  constructor() {
    // this.setUpMovies();
  this.movies = [
    { id: 1, description : 'Hello World' },
    { id : 2, description : 'Three guys'},
    { id : 3, description : 'Love'}
    ];
  }
  ngOnInit() {
  }

  // public setUpMovies : IMovie[] = [
   
  // }
}
