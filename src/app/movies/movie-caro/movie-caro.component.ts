import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { IMovie } from '../../shared/Movies';
import { ResponseService } from '../../services/response.service';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: 'movie-caro.component.html',
  styleUrls: ['./movie-caro.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
  
})
export class NgbdCarouselConfig implements OnInit {
  // @Input() moviesResult : IMovie[] = [];
  moviesResult : IMovie[] = [];
  topMovies : IMovie[] = [];
  constructor(config: NgbCarouselConfig, private responseService : ResponseService) {
    // customize default values of carousels used by this component tree
   
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    
    // this.getTopMovies();
  }
  ngOnInit(){
    
    this.responseService.getPopularMovies(10)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
    // console.log(this.moviesResult);
  }
  // getTopMovies() {
  //       for(let i = 0; i <= 5; i++){
  //         this.topMovies.push(this.moviesResult[i]);
  //       }
  //       return this.moviesResult;
  // }
  // getMovies(){
}