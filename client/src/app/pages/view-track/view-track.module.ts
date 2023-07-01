import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './components/ratings/ratings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { TrackHeaderComponent } from './components/track-header/track-header.component';

import { CreateSubmissionComponent } from './components/create-submission/create-submission.component';
import { TrackSubmissionsComponent } from './components/view-submissions/submissions.component';
import { MoreSubmissionsComponent } from './components/view-more-submissions/more-submissions.component';

import { ReviewsComponent } from './components/view-reviews/reviews.component';
import { MoreReviewsComponent } from './components/view-more-reviews/more-reviews.component';
import { CreateReviewComponent } from './components/create-review/create-review.component';

import { ViewTrackComponent } from './view-track.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapPanelComponent } from './components/map-panel/map-panel.component';

@NgModule({
  declarations: [
    TrackHeaderComponent,
    RatingsComponent,
    CreateSubmissionComponent,
    TrackSubmissionsComponent,
    MoreReviewsComponent,
    MoreSubmissionsComponent,
    ReviewsComponent,
    ViewTrackComponent,
    MapPanelComponent,
    CreateReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    ViewTrackComponent
  ]
})
export class ViewTrackModule { }
