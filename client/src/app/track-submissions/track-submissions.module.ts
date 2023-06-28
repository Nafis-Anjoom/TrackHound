import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackSubmissionsComponent } from './track-submissions/track-submissions.component';
import { TimeFormat } from '../pipes/time-format.pipe';
import { SharedModule } from '../shared/shared.module';
import { MoreSubmissionsComponent } from './more-submissions/more-submissions.component';
import { CreateSubmissionComponent } from './create-submission/create-submission.component';

@NgModule({
  declarations: [
    TrackSubmissionsComponent,
    TimeFormat,
    MoreSubmissionsComponent,
    CreateSubmissionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TrackSubmissionsComponent]
})
export class TrackSubmissionsModule { }
