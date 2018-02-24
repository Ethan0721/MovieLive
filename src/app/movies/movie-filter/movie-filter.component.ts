import { Component, OnInit, Input } from '@angular/core';
import { IFilter } from '../shared/Filter';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.css']
})
export class BooksFilterComponent implements OnInit {
  filters: IFilter[];
 @Input('cat') cat;

  constructor(private route: ActivatedRoute, private filterService: FilterService) {
    this.filterService.getAll()
      .subscribe(
      categories => {
        this.filters = categories.filter(function(cat){return cat.id<29});//TO DO: wait to change back after DB is recovered
        console.log('Child Componet received: ' + this.cat);
      }
      );
  }

  ngOnInit() {
  }

}
