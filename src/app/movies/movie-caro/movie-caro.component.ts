import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-caro',
  templateUrl: './movie-caro.component.html',
  styleUrls: ['./movie-caro.component.css']
})
export class MovieCaroComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 

    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
