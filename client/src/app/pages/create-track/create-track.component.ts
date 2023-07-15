import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import env from "env";

@Component({
  selector: 'app-create-track',
  templateUrl: './create-track.component.html',
  styleUrls: ['./create-track.component.css']
})
export class CreateTrackComponent {
  title = new FormControl('');
  startingLocation = new FormControl<[lat: number, lng: number]>([40, -20]);
  checkpoints = new FormControl<[lat: number, lng: number][]>([]);

  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: { lat: 40, lng: -20 }
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = env.SHOULD_LOAD_MAP ? httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${env['GOOGLE_MAPS_API_KEY']}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      ) : of(false);
  }

  updateStartingLocation() {
    this.options = {

    }
  }
}
