import { Component, Input, Output, OnInit } from '@angular/core';

import { Listing } from './models/listing.model';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.scss']
})
export class ListingItemComponent implements OnInit {
  @Input() listing: Listing;
  
  constructor() { }

  ngOnInit() {
  }
}
