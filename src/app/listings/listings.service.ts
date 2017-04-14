import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Restangular } from 'ng2-restangular';

import { SearchOptions } from './models/search-options.model';
import { Listing } from './models/listing.model';
import { listings } from './stored-data';

@Injectable()
export class ListingsService {
  constructor(private restangular: Restangular) { }

  searchListings(options: SearchOptions) {
    return this.restangular.all('listings').getList(options);

    //return new Observable<Listing[]>(observer => {
    //  observer.next(listings);
    //  observer.complete();
    //});
  }
}
