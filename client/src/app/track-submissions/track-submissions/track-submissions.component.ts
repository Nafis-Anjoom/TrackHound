import { Component } from '@angular/core';

@Component({
  selector: 'app-track-submissions',
  templateUrl: './track-submissions.component.html',
  styleUrls: ['./track-submissions.component.css']
})
export class TrackSubmissionsComponent {
  submissions = [
    {
      userName: "john doe",
      time: 13745000,
      rating: 4,
      datePosted: new Date("2023-05-30T12:34:56Z")
    },
    {
      userName: "john doe",
      time: 13745000,
      rating: 4,
      datePosted: new Date("2023-05-30T12:34:56Z")
    },
    {
      userName: "john doe",
      time: 13745000,
      rating: 4,
      datePosted: new Date("2023-05-30T12:34:56Z")
    },
    {
      userName: "john doe",
      time: 13745000,
      rating: 4,
      datePosted: new Date("2023-05-30T12:34:56Z")
    },
    {
      userName: "john doe",
      time: 13745000,
      rating: 4,
      datePosted: new Date("2023-05-30T12:34:56Z")
    },
    {
      userName: "john doe",
      time: 13745000,
      rating: 4,
      datePosted: new Date("2023-05-30T12:34:56Z")
    }
  ]
}
