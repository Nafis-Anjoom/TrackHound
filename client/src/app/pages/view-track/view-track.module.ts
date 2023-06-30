import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackHeaderComponent } from './components/track-header/track-header.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { CreateSubmissionComponent } from './components/create-submission/create-submission.component';
import { TrackSubmissionsComponent } from './components/view-submissions/submissions.component';
import { MoreSubmissionsComponent } from './components/view-more-submissions/more-submissions.component';
import { ReviewsComponent } from './components/view-reviews/reviews.component';
import { MoreReviewsComponent } from './components/view-more-reviews/more-reviews.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimeFormat } from 'src/app/pipes/time-format.pipe';
import { ViewTrackComponent } from './view-track.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapPanelComponent } from './components/map-panel/map-panel.component';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrackHeaderComponent,
    RatingsComponent,
    CreateSubmissionComponent,
    TrackSubmissionsComponent,
    MoreReviewsComponent,
    MoreSubmissionsComponent,
    ReviewsComponent,
    TimeFormat,
    ViewTrackComponent,
    MapPanelComponent,
    CreateReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewTrackComponent
  ]
})
export class ViewTrackModule { }
