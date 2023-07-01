import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogFooterDirective } from './dialog/dialog-footer.directive';
import { DialogContentDirective } from './dialog/dialog-content.directive';
import { DialogHeaderDirective } from './dialog/dialog-header.directive';
import { TimeFormat } from './pipes/time-format.pipe';

@NgModule({
  declarations: [
    DialogComponent,
    DialogFooterDirective,
    DialogContentDirective,
    DialogHeaderDirective,
    TimeFormat
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent,
    DialogFooterDirective,
    DialogContentDirective,
    DialogHeaderDirective,
    TimeFormat
  ]
})
export class SharedModule { }
