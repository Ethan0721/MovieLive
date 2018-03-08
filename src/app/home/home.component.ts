import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/Movies';
import { ResponseService } from '../services/response.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  // @Input() allMovies : IMovie[] = [];
  // topMovies = new Array(4);
  constructor(){}
//   constructor(private responseService: ResponseService) { 
//     responseService.getAllMovies().subscribe(
//     response =>
//     this.moviesResult = response.results
//   );
// }
// getallMovies() : any{
//   return this.moviesResult;
// }
// getTopMovies() {
//     for(var i =0; i <=5; i++){
//       this.topMovies.push(this.allMovies[i]);
//     }
//     console.log(this.topMovies.length);
//     return this.topMovies;
//   }
}
