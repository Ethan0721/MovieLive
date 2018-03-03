import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MoviesService} from './services/movies.service';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { NotFoundComponent } from './shared/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbdCarouselConfig} from './movies/movie-caro/movie-caro.component';
import { MovieBodyComponent } from './movies/movie-body/movie-body.component';
import { RouterModule } from '@angular/router';
import { FilterService } from './services/filter.service';
import { HttpClientModule } from '@angular/common/http';
import { ResponseService } from './services/response.service';
import { LoginComponent } from './login/login.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { SignupComponent } from './signup/signup.component';
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
    SignupComponent
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([  
      { path: '', component:  HomeComponent, data : {title : 'Movie Live Home'} },
      { path: 'login', component: LoginComponent, data : {title : "Log in "}},
      { path : 'movie/:id', component : MovieDetailComponent},
    ])

  ],
  providers: [
    NgbdCarouselConfig,
    FilterService,
    MoviesService,
    ResponseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

