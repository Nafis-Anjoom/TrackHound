import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogFooterDirective } from './dialog/dialog-footer.directive';
import { DialogContentDirective } from './dialog/dialog-content.directive';
import { DialogHeaderDirective } from './dialog/dialog-header.directive';

@NgModule({
  declarations: [
    DialogComponent,
    DialogFooterDirective,
    DialogContentDirective,
    DialogHeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent,
    DialogFooterDirective,
    DialogContentDirective,
    DialogHeaderDirective
  ]
})
export class SharedModule { }
