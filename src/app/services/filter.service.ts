import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { IGenres } from '../shared/Genres';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilterService extends AbstractBaseService<IGenres>{

  constructor( _http: HttpClient) {
    super(_http, "webapi");
  }

}
