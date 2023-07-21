import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, Input } from '@angular/core';
import { GoogleMap, MapPolyline } from '@angular/google-maps';
import env from 'env';
import { Observable, catchError, map, of } from 'rxjs';
import { CreateTrackService } from '../create-track.service';

interface Location {
  lat: number,
  lng: number
};

@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
  styleUrls: ['./create-map.component.css']
})
export class CreateMapComponent {
  apiLoaded: Observable<boolean>;

  coordinates: google.maps.LatLngLiteral[] = [];

  @Input() startingLocation: Location = {
    lat: 49.2827,
    lng: -123.1207
  };

  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapPolyline) polyline!: MapPolyline;

  options: google.maps.MapOptions = {
    // center: {lat: 49.2827, lng: -123.1207 },
    center: {lat: this.startingLocation.lat, lng: this.startingLocation.lng },
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

    this.createTrackService.dataObservable$.subscribe((coordinates) => {
      this.coordinates = coordinates;
      this.polyline.polyline?.setPath(this.coordinates);
      console.log("subscribed");
    });
  }

  ngOnInit() {
    this.polyline?.polyline?.setPath(this.coordinates);
  }
  
  ngOnChanges() {
    console.log("attempt to start");
    console.log(this.startingLocation);
    this.map.panTo(this.startingLocation);
    this.coordinates = [];
    this.createTrackService.updateData(this.coordinates);
  }

  // updateStartingCoordinate() {
  //   this.options = {
  //     center: { lat: this.startLat.getRawValue() ?? 0, lng: this.startLng.getRawValue() ?? 0 }
  //   }
  // }

  addCheckpoint(event: google.maps.MapMouseEvent) {
    const coordinate = {
      lat: event.latLng?.lat() ?? 0,
      lng: event.latLng?.lng() ?? 0
    };
    this.coordinates.push(coordinate);
    this.createTrackService.updateData(this.coordinates);
    this.polyline.polyline?.setPath(this.coordinates);
  }
}
