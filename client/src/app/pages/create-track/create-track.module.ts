import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTrackComponent } from './create-track.component';
import { CreateMapComponent } from './create-map/create-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CreateTrackService } from './create-track.service';

@NgModule({
  providers: [
    CreateTrackService
  ],
  declarations: [
    CreateTrackComponent,
    CreateMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  exports: [
    CreateTrackComponent
  ]
})
export class CreateTrackModule { }
