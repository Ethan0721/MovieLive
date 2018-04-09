import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/Movies';
import { ResponseService } from '../services/response.service';
import { NgProgress, NgProgressInterceptor  } from 'ngx-progressbar';
import { HttpClient , HTTP_INTERCEPTORS }  from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit{

  post : any;
  url : string;
  topMovies: IMovie[];
  image_url = "http://image.tmdb.org/t/p/original/";
  theaterMovies: IMovie[]=[];
  JapanMovie : {id:number,backdrop_path:string,title:string}[];
  constructor(
              // progressService: NgProgress, 
              config: NgbCarouselConfig, 
              private _activeRoute: ActivatedRoute,
              private responseService: ResponseService  
            ){
      config.interval = 10000;
      config.wrap = true;
      config.keyboard = false;
          }
  
  ngOnInit(){       
    this.JapanMovie = [
      { "id": 129, "backdrop_path": "/djgM2d3e42p9GFQObg6lwK2SVw2.jpg", "title":"Spirited Away"},
      { "id": 372058, "backdrop_path": "/6vkhRvsRvWpmaRVyCXaxTkIEb7j.jpg","title":"Your Name."  },
      { "id": 378064, "backdrop_path": "/lp1TIgwmhrvhktah74MsfZruWpp.jpg", "title":"A Silent Voice" }
    ];
    //  this.url = "../../../assets/images/main";
    this.responseService.getMoviePlaying(1)
    .subscribe(
        res=>{  
          this.theaterMovies=res.results;
        }
      );
    //  this.responseService.getTopMovies(1)
    //   .subscribe(
    //     m => {
    //       this.topMovies = m.results;
    //     }
    //   );
  }
}
