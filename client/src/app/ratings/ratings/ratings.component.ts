import { Component } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  ratings = [1000, 10, 10, 20, 31, 50, 300, 123, 54, 120, 120];
  total = this.ratings.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  ratings_scaled = this.ratings.map((val, index) => {
    return (val / this.total) * 100;
  });
}
