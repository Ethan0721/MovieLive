import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/Movies';
import { ResponseService } from '../services/response.service';
import { NgProgress, NgProgressInterceptor  } from 'ngx-progressbar';
import { HttpClient , HTTP_INTERCEPTORS }  from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit{

  post : any;
  url : string;
  topMovies: IMovie[];
  image_url = "http://image.tmdb.org/t/p/original/";
  theaterMovies: IMovie[];

  constructor(progressService: NgProgress, 
              config: NgbCarouselConfig, 
              private http: HttpClient,
              private responseService: ResponseService  
            ){
      config.interval = 10000;
      config.wrap = true;
      config.keyboard = false;
     
          }
  
  ngOnInit(){       
   
    //  this.url = "../../../assets/images/main";
    this.responseService.getMoviePlaying(1)
    .subscribe(
        res=>{  
          this.theaterMovies=res.results;
        }
      );

     this.responseService.getTopMovies(1)
      .subscribe(
        m => {
          this.topMovies = m.results;
        }
      );
 //   const sampleUrl = 'http://moonlight.movie/assets/images/header/main02.jpg';
    // this.progressService.start();
    // setTimeout(() => {
    //   this.progressService.set(0.4);
    // }, 1000);
    // setTimeout(() => {
    //   this.progressService.inc(0.4);
    // }, 2000);
    // this.http.get(sampleUrl)
    //   .subscribe((response) => {
    // this.progressService.done();
    //     this.post = response
    //   });      
    // this.progressService.done();
    // this.url = "../../../assets/images/main02.jpg";
    console.log(this.topMovies);
  }
}
