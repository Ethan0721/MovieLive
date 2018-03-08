import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../../shared/Movies';

@Pipe({
  name: 'moviePopular'
})
export class MoviePopularPipe implements PipeTransform {

  //retrieve movie which is first 5 movies  

  // transform(value: any): IMovie[] {
  //   let topMovies : IMovie[] = [];
    
  //   for(let i = 0; i <= 5; i++){
  //     topMovies.push(value[i]);
  //     console.log(value[i]);
  //   }
  //   return topMovies;
  // }
  //retrieve rate is greater than 7.0 
  transform(value: any, vote_average : number): IMovie[] {
    let topMovies : IMovie[] = [];
    
    for(let i = 0; i < value.length; i++){
      if(value[i].vote_average > 7)
        topMovies.push(value[i]);
        console.log(value[i].vote_average);
    }
    return topMovies;
  }

}
