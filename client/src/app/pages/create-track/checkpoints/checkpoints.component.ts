import { Component } from '@angular/core';
import { CreateTrackService } from '../create-track.service';

@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrls: ['./checkpoints.component.css']
})
export class CheckpointsComponent {
  coordinates: google.maps.LatLngLiteral[] = [];
  constructor(private createTrackService: CreateTrackService) {
    this.createTrackService.dataObservable$.subscribe((data) => {
      this.coordinates = data;
    });
  }

  removeCheckpoint(index: number) {
    this.coordinates.splice(index, 1);
    this.createTrackService.updateData(this.coordinates);
  }
}
