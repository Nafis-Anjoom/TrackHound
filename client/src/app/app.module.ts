import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapModule } from './map/map.module';
import { HttpClientModule } from '@angular/common/http';
import { TrailInfoModule } from './trail-info/trail-info.module';
import { TrackSubmissionsModule } from './track-submissions/track-submissions.module';
import { ReviewsModule } from './reviews/reviews.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    HttpClientModule,
    TrailInfoModule,
    TrackSubmissionsModule,
    ReviewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
