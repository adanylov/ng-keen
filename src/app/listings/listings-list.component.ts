import { Component, OnInit } from '@angular/core';

import { ListingsService } from './listings.service';

import { SearchOptions } from './models/search-options.model';
import { Listing } from './models/listing.model';


@Component({
  selector: 'app-listings-list',
  templateUrl: './listings-list.component.html',
  styleUrls: ['./listings-list.component.scss']
})
export class ListingsListComponent implements OnInit {
  searchOptions: SearchOptions = {
    type: 'cat',
    index: 0,
    size: 10,
    term: '195',
    show: 'all'
  };
  listings: Listing[] = [];

  constructor(private listingService: ListingsService) { }

  ngOnInit() {
    this.listingService.searchListings(this.searchOptions).subscribe((result) => {
        this.listings = result;
    });
  }

}
