import { AppComponent } from './app.component';
import { AuthService} from './services/auth.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserModule } from '@angular/platform-browser';

import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './services/movies.service';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MovieBodyComponent } from './movies/movie-body/movie-body.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviePopularPipe } from './movies/movie-caro/movie-popular.pipe';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig} from './movies/movie-caro/movie-caro.component';
import { NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgProgressModule} from 'ngx-progressbar';

import { RouterModule } from "@angular/router";

import { ResponseService } from './services/response.service';
import { GenreService } from './services/genre.service';

import { FormsModule } from '@angular/forms';
import { FilterService } from './services/filter.service';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ReleaseYearFilterPipe } from './movies/movie-detail/release-year-filter.pipe';
import { GenreComponent } from './genre/genre.component';
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
    GenreComponent,
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgProgressModule,
    RouterModule.forRoot([  
      { path: '', component : HomeComponent },
      { path: 'movies/popular', component:  MovieBodyComponent },
      { path : 'genre/:id' , component : GenreComponent},
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
    AuthService,
    GenreService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

