import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { MoreReviewsComponent } from './more-reviews/more-reviews.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ReviewsComponent,
    MoreReviewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [ReviewsComponent]
})
export class ReviewsModule { }
