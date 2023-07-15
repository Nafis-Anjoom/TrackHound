import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateTrackService {
  coordinates: google.maps.LatLngLiteral[] = [];

  constructor() { }
  
  addCheckpoint(checkpoint: google.maps.LatLngLiteral) {
    this.coordinates.push(checkpoint);
    return this.coordinates;
  }
  
  removeCheckpointById(index: number) {
    this.coordinates.splice(index, 1);    
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
