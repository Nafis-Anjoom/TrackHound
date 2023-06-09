import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackSubmissionsComponent } from './track-submissions/track-submissions.component';



@NgModule({
  declarations: [
    TrackSubmissionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TrackSubmissionsComponent]
})
export class TrackSubmissionsModule { }
