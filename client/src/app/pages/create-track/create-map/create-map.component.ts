import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoogleMap, MapPolyline } from '@angular/google-maps';
import env from 'env';
import { Observable, catchError, map, of } from 'rxjs';
import { CreateTrackService } from '../create-track.service';

@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent {
  apiLoaded: Observable<boolean>;
  
  startLat = new FormControl<number>(49.2827);
  startLng = new FormControl<number>(-123.1207);
  
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapPolyline) polyline!: MapPolyline;

  options: google.maps.MapOptions = {
    center: { lat: this.startLat.getRawValue() ?? 0, lng: this.startLng.getRawValue() ?? 0 },
    styles:[
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ] 
  }
  
  constructor(httpClient: HttpClient, private createTrackService: CreateTrackService) {
    this.apiLoaded = env.SHOULD_LOAD_MAP ? httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${env['GOOGLE_MAPS_API_KEY']}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      ) : of(false);
  }
  
  ngOnInit() {
    const coordinates = this.createTrackService.getCoordinates();
    this.polyline.polyline?.setPath(coordinates);
  }

  updateStartingCoordinate() {
    this.options = {
      center: { lat: this.startLat.getRawValue() ?? 0, lng: this.startLng.getRawValue() ?? 0 }
    }
  }

  addCheckpoint(event: google.maps.MapMouseEvent) {
    const newCoordinates = this.createTrackService.addCheckpoint({
      lat: event.latLng?.lat() ?? 0,
      lng: event.latLng?.lng() ?? 0
    });
    this.polyline.polyline?.setPath(newCoordinates);
    console.log(newCoordinates);
  }
}
