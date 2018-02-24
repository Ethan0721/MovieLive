import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { IFilter } from '../../shared/Filter';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  filters: IFilter[];
 @Input('cat') cat;

  constructor(private route: ActivatedRoute, private filterService: FilterService) {
    // this.filterService.getAll()
    //   .subscribe(
    //   categories => {
    //     this.filters = categories.filter(function(cat){return cat.id<29});//TO DO: wait to change back after DB is recovered
    //     console.log('Child Componet received: ' + this.cat);
    //   }
    //   );
  }

  ngOnInit() {
  }

}
