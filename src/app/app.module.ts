import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './components/vote/vote.component';
import { CartComponent } from './components/cart/cart.component';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';
import { FlopVotesComponent } from './components/flop-votes/flop-votes.component';
import { RentalCartComponent } from './components/rental-cart/rental-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    CartComponent,
    MovieDisplayComponent,
    FlopVotesComponent,
    RentalCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
