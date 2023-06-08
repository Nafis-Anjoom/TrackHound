import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPanelComponent } from './map-panel/map-panel.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    MapPanelComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    MapPanelComponent
  ]
})
export class MapModule { }
