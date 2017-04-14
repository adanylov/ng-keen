import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestangularModule, Restangular } from 'ng2-restangular';

import { ListingsService } from './listings/listings.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar.component';
import { ListingsListComponent } from './listings/listings-list.component';
import { Error404Component } from './errors/404.component';
import { HomeComponent } from './home.component';
import { ListingItemComponent } from './listings/listing-item.component';

import { routing } from './routes';
import { AppFooterComponent } from './layouts/app-footer.component';

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://m.keen.com/api');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // Importing RestangularModule and making default configs for restanglar
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    ListingsService
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ListingsListComponent,
    Error404Component,
    HomeComponent,
    ListingItemComponent,
    AppFooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
