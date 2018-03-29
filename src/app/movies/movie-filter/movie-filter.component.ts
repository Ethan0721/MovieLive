import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { IGenre } from '../../shared/Genre';


@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  filters: IGenre[];
  @Input('cat') cat;


  constructor(private route: ActivatedRoute, private filterService: FilterService) {
    // this.filterService.getAll()
    //   .subscribe(
    //   categories => {
    //     this.filters = categories;//.filter(function(cat){return cat.id<29});//TO DO: wait to change back after DB is recovered
    //     console.log('Child Componet received: ' + this.cat);
    //   }
    //   );
    // this.filters = [
    //   {id:1,name:'sb',isChecked:false},
    //   {id:2,name:'Commedy',isChecked:false},
    //   {id:3,name:'Science',isChecked:false},
    //   {id:4,name:'Action',isChecked:false}
    // ];

  }

  ngOnInit() {
  }

}
