import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailInformationComponent } from './trail-information/trail-information.component';



@NgModule({
  declarations: [
    TrailInformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TrailInformationComponent]
})
export class TrailInfoModule { }
