import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogFooterDirective } from './dialog-footer.directive';
import { DialogContentDirective } from './dialog-content.directive';
import { DialogHeaderDirective } from './dialog-header.directive';

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
