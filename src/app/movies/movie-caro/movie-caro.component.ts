import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { IMovie } from '../../shared/Movies';
import { ResponseService } from '../../services/response.service';
import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: 'movie-caro.component.html',
  styleUrls: ['./movie-caro.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class caroComponent implements OnInit {
  moviesResult : IMovie[] = [];
  topMovies : IMovie[] = [];
  private ngUnsubscribe = new Subject<void>();
  constructor(config: NgbCarouselConfig, 
              private responseService : ResponseService) {
    // customize default values of carousels used by this component tree
   
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    
    // this.getTopMovies();
  }
  ngOnInit(){
    
    this.responseService.getPopularMovies(10)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(
      response =>
      this.moviesResult = response.results
    );
    // console.log(this.moviesResult);
  }
}