import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseYearFilter'
})
export class ReleaseYearFilterPipe implements PipeTransform {

  transform(value: string): string {
    if (value == "" || value == null)
      return "";
    
    let year = value.substring(0,4);
    return year;
    
  }
}
