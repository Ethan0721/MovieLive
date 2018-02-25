import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { NotFoundComponent } from './shared/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbdCarouselConfig} from './movies/movie-caro/movie-caro.component';
import { RouterModule } from '@angular/router';
import { FilterService } from './services/filter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    NavBarComponent,
    MovieFilterComponent,
    NotFoundComponent,
    NgbdCarouselConfig

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers: [
    NgbdCarouselConfig,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

