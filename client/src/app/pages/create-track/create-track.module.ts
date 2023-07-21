import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTrackComponent } from './create-track.component';
import { CreateMapComponent } from './create-map/create-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CreateTrackService } from './create-track.service';
import { CheckpointsComponent } from './checkpoints/checkpoints.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [
    CreateTrackService
  ],
  declarations: [
    CreateTrackComponent,
    CreateMapComponent,
    CheckpointsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateTrackComponent
  ]
})
export class CreateTrackModule { }
