import {Component, Injectable, Host} from '@angular/core';
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

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit, OnInit {

    model : any;
    searching = false;
    searchFailed = false;
    searchResult : IMovie[] = [];
    defaultResult : IMovie[]=[];
    showDropDown = false;
    inputValue = " ";
  constructor(private filterService: FilterService,
              private responseService: ResponseService ) { 
       
  }
  ngOnInit(){
    this.getPopularMovies();
  }
  ngAfterViewInit(){
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
  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
    console.log(this.showDropDown);
  }
  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
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
