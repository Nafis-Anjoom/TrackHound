import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTrackService {
  coordinates: google.maps.LatLngLiteral[] = [];
  private datasource = new Subject<google.maps.LatLngLiteral[]>();
  dataObservable$ = this.datasource.asObservable();
  
  constructor() { }
  
  updateData(data: google.maps.LatLngLiteral[]) {
    this.datasource.next(data);
    console.log("updated track");
  }

  addCheckpoint(checkpoint: google.maps.LatLngLiteral) {
    this.coordinates.push(checkpoint);
    return this.coordinates;
  }

  removeCheckpointById(index: number) {
    this.coordinates.splice(index, 1);
    console.log("removed from service:");
    console.log(this.coordinates);
    return this.coordinates;
  }

  removeCheckpointByObject(checkpoint: google.maps.LatLngLiteral) {
    const index = this.coordinates.indexOf(checkpoint);
    if (index) {
      this.removeCheckpointById(index);
    }
  }

  getCoordinates() {
    return this.coordinates;
  }
}
