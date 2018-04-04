// import { Component, OnInit } from '@angular/core';
// import { IGenre } from '../shared/Genre';
// import { GenreService} from '../services/genre.service';

// @Component({
//   selector: 'app-genre',
//   templateUrl: './genre.component.html',
//   styleUrls: ['./genre.component.css']
// })
// export class GenreComponent implements OnInit {
//   genres : IGenre[];

//   constructor( private genreService : GenreService) { }
//   ngOnInit() {
//     this.getGenre();
//   }
//   getGenre(){
//     this.genreService.getGenreList()
//     .subscribe(
//       res =>
//       this.genres = res.genres   )
//    }
// }
