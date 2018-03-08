import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../shared/Movies';
import { MoviesService } from '../../services/movies.service';
import { IuserResponse} from '../../shared/userResponse';
import { ResponseService } from '../../services/response.service';
import { ActivatedRoute, Route } from '@angular/router';
import {NgxPaginationModule} from  'ngx-pagination';

@Component({
  selector: 'app-movie-body',
  templateUrl: './movie-body.component.html',
  styleUrls: ['./movie-body.component.css']
})
export class MovieBodyComponent implements OnInit {
  // userResponse : IuserResponse[];
  // movies: IMovie[]=[];
  p : number  = 1;
  @Input() moviesResult : IMovie[] = [];
  
  ngOnInit() {
  }
  constructor(private _activeroute: ActivatedRoute, private responseService: ResponseService) { 
    // responseService.getOnly().subscribe(
    //   response =>
    //   this.moviesResult = response.results
    // );
 }
   playMovie(){
     
    //  console.log("haha");
   }
      //  movie =>{
      //     // this.movies = this.category[movie];
      //     this.category.forEach(element => {
      //       this.movies.push(element);
      //     });
      //  }
  }

