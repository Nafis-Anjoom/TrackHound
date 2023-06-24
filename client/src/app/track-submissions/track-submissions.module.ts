import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackSubmissionsComponent } from './track-submissions/track-submissions.component';
import { TimeFormat } from '../pipes/time-format.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TrackSubmissionsComponent,
    TimeFormat
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TrackSubmissionsComponent]
})
export class TrackSubmissionsModule { }
