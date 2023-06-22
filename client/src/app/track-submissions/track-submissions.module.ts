import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackSubmissionsComponent } from './track-submissions/track-submissions.component';
import { TimeFormat } from '../pipes/time-format.pipe';


@NgModule({
  declarations: [
    TrackSubmissionsComponent,
    TimeFormat
  ],
  imports: [
    CommonModule
  ],
  exports: [TrackSubmissionsComponent]
})
export class TrackSubmissionsModule { }
