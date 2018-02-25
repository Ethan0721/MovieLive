import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbdCarouselConfig} from './movies/movie-caro/movie-caro.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    NavBarComponent,
    NgbdCarouselConfig
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    NgbdCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

