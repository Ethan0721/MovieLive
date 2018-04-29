import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';
import { AuthService} from './services/auth.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng4-click-outside';
import { caroComponent} from './movies/movie-caro/movie-caro.component';

import { MoviesComponent } from './movies/movies.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MovieBodyComponent } from './movies/movie-body/movie-body.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviePopularPipe } from './movies/movie-caro/movie-popular.pipe';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgProgressModule} from 'ngx-progressbar';

import { ReleaseYearFilterPipe } from './movies/movie-detail/release-year-filter.pipe';
import { RouterModule } from "@angular/router";
import { ResponseService } from './services/response.service';
import { GenreService } from './services/genre.service';

import { FormsModule } from '@angular/forms';
import { FilterService } from './services/filter.service';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './user/signup/signup.component';

import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    NavBarComponent,
    MovieFilterComponent,
    NotFoundComponent,
    
    MovieBodyComponent,
    LoginComponent,
    MovieDetailComponent,
    SignupComponent,
    MoviePopularPipe,
    ReleaseYearFilterPipe,
    caroComponent,
    FooterComponent,
    UserComponent,
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgProgressModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 22,
      outerStrokeWidth: 5,
      innerStrokeWidth: 0,
      maxPercent:100,
      showSubtitle:false,
      outerStrokeColor: "#78C000",
      unitsColor:"white",
      backgroundPadding: 10,
      animationDuration: 500,
      backgroundColor:"black",
      titleColor:"white",
      unitsFontSize:"8",
      titleFontSize:"15"

    }),
    RouterModule.forRoot([  
      { path: '', component : HomeComponent},
      
      { path:'popular', component : MovieBodyComponent,canActivate:[AuthGuard] },
      { path:'top', component : MovieBodyComponent },
      { path:'nowplaying', component : MovieBodyComponent },
      { path:'upcomming', component : MovieBodyComponent },
      { path :'genre/:id' , component : MovieBodyComponent},

      { path: 'login', component: LoginComponent, data : {title : "Log In "}},
      { path : 'signup', component : SignupComponent, data : {title : "Sign Up "}}, 
      
      { path : 'movie/:id', component : MovieDetailComponent},
      
      { path : 'user/:username', component : UserComponent,canActivate:[AuthGuard]},
      { path: '**', component: NotFoundComponent }

    ])
  ],
  providers: [
    // NgbdCarouselConfig,
    FilterService,
    // MoviesService,
    ResponseService,
    AuthService,
    GenreService,
    AuthGuard 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

