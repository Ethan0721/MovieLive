import { Component, OnInit } from '@angular/core';
// import { MoviesService } from '../services/movies.service';
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
  // pageId : number;
  ngOnInit() {
   
  }
  constructor(private responseService: ResponseService) {
    // this.pageId = 1; 
    // this.getUpcommingMovies();
   }

  getMovies() : any{
      return this.moviesResult;
  }

  receivePageIdChange($event){
    // this.pageId=$event;
    // this.changeUrl();
  }
  // getUpcommingMovies() : IMovie[]{
  //   this.responseService.getUpcommingMovies().subscribe(
  //     response =>
  //     this.moviesResult = response.results);

  //     return this.moviesResult;
  //  }

  
}
