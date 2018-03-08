import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { IMovie } from '../../shared/Movies';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: 'movie-caro.component.html',
  styleUrls: ['./movie-caro.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
  
})
export class NgbdCarouselConfig {
  @Input() moviesResult : IMovie[] = [];
  topMovies : IMovie[] = [];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    // this.getTopMovies();
  }
  // getTopMovies() {
  //       for(let i = 0; i <= 5; i++){
  //         this.topMovies.push(this.moviesResult[i]);
  //       }
  //       return this.moviesResult;
  // }
}