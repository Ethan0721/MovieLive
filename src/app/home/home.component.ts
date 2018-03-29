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
  constructor(progressService: NgProgress, 
              config: NgbCarouselConfig, 
              private http: HttpClient){
      config.interval = 10000;
      config.wrap = true;
      config.keyboard = false;
          }
  
  ngOnInit(){
       
     this.url = "../../../assets/images/main";
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
    
  }

//   constructor(private responseService: ResponseService) { 
//     responseService.getAllMovies().subscribe(
//     response =>
//     this.moviesResult = response.results
//   );
// }
// getallMovies() : any{
//   return this.moviesResult;
// }
// getTopMovies() {
//     for(var i =0; i <=5; i++){
//       this.topMovies.push(this.allMovies[i]);
//     }
//     console.log(this.topMovies.length);
//     return this.topMovies;
//   }
}
