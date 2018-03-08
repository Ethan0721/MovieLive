import { AppComponent } from './app.component';
import {AuthService} from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';

import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './services/movies.service';
import { HomeComponent } from './home/home.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MovieBodyComponent } from './movies/movie-body/movie-body.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviePopularPipe } from './movies/movie-caro/movie-popular.pipe';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig} from './movies/movie-caro/movie-caro.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { RouterModule } from '@angular/router';
import { ResponseService } from './services/response.service';

import { FilterService } from './services/filter.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReleaseYearFilterPipe } from './movies/movie-detail/release-year-filter.pipe';
// import { EmbedVideoService } from 'ngx-embed-video';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    NavBarComponent,
    MovieFilterComponent,
    NotFoundComponent,
    NgbdCarouselConfig,
    MovieBodyComponent,
    LoginComponent,
    MovieDetailComponent,
    SignupComponent,
    MoviePopularPipe,
    ReleaseYearFilterPipe,
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([  
      { path: '', component:  HomeComponent, data : {title : 'Movie Live Home'} },
      { path: 'login', component: LoginComponent, data : {title : "Log in "}},
      { path : 'movie/:id', component : MovieDetailComponent},
      { path : 'signup', component : SignupComponent}, 
    ])

  ],
  providers: [
    NgbdCarouselConfig,
    FilterService,
    MoviesService,
    ResponseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

