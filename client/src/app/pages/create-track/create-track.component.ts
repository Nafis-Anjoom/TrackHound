import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import env from "env";

interface Location {
  lat: number,
  lng: number
};

@Component({
  selector: 'app-create-track',
  templateUrl: './create-track.component.html',
  styleUrls: ['./create-track.component.css']
})
export class CreateTrackComponent {
  title = new FormControl('');

  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: { lat: 40, lng: -20 }
  }

  startingLocation = new FormGroup({
    lat: new FormControl("40.7128"),
    lng: new FormControl("-123.1207")
  });
  
  parsedStartedLocation : Location = {
    lat: 49.2827,
    lng: -123.1207
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = env.SHOULD_LOAD_MAP ? httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${env['GOOGLE_MAPS_API_KEY']}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      ) : of(false);
  }

  updateStartingLocation() {
    const loc = this.startingLocation.getRawValue();
    this.parsedStartedLocation = {
      lat: parseInt(loc.lat ?? "0"),
      lng: parseInt(loc.lng ?? "0")
    };
  }
}
