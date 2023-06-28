import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { MoreReviewsComponent } from './more-reviews/more-reviews.component';
import { SharedModule } from '../shared/shared.module';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReviewsComponent,
    MoreReviewsComponent,
    CreateReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ], 
  exports: [ReviewsComponent]
})
export class ReviewsModule {
}
