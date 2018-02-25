import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { IFilter } from '../shared/Filter';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilterService extends AbstractBaseService<IFilter>{

  constructor( _http: HttpClient) {
    super(_http, "webapi");
  }

}
