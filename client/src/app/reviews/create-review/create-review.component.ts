import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent {
  reviewForm = new FormGroup({
    title: new FormControl(''),
    rating: new FormControl(0), 
    body: new FormControl('')
  });
  
  onSubmit() {
    console.log("submitted");
  }
}
