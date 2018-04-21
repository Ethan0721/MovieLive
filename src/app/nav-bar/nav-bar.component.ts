import {Component, Injectable, Host,HostListener} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
import {FilterService} from '../services/filter.service';
import { IMovie } from '../shared/Movies';
import { Observable } from 'rxjs';
import { AfterViewInit, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ClickOutsideModule } from 'ng4-click-outside';
import { ResponseService } from '../services/response.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('up', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('down',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      // transition('up => down', animate('700ms ease-out')),
      transition('down => up', animate('700ms ease-in'))
    ])
  ]
})
export class NavBarComponent implements AfterViewInit, OnInit {

    model : any;
    searching = false;
    searchFailed = false;
    searchResult : IMovie[] = [];
    defaultResult : IMovie[]=[];
    showDropDown = false;
    inputValue = " ";
    logo_path : string;
    pos: string = 'up';
    // logo:any;
  constructor(private filterService: FilterService,
              private responseService: ResponseService,
              public el: ElementRef ) { 
  }
  ngOnInit(){
    this.logo_path="../../assets/images/movie.png";
    this.getPopularMovies();
  }
  ngAfterViewInit(){
    // this.logo = document.getElementById("logo").className;
    const input : any = document.getElementById('typeahead');
    const keyups$ = Observable.fromEvent(input,'keyup')
    .debounceTime(500)
    .distinct()
    .do( () => this.inputValue = input.value )
    .filter(text => !!text)
    .switchMap(term=>this.filterService.search(input.value+" "));
    
    keyups$
    // .map(res => res.results[0].id +": " + res.results[0].release_date)
    .subscribe(
      res => this.searchResult = res.results
    );
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    //  const componentPosition = this.el.nativeElement.offsetTop;
     const scrollPosition = window.pageYOffset;
     if(scrollPosition>70){
      this.pos = "down";
      // console.log(scrollPosition);
     }else{
       this.pos="up";
     }
  }
  topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
    // console.log(this.showDropDown);
  }
  onClickedOutside() {
    // console.log('Clicked outside:', e);
    this.showDropDown = false;
  }
  getPopularMovies(){
    this.responseService.getPopularMovies(1)
    .subscribe(
      response =>
      this.defaultResult = response.results
    );
   }
}
