import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreReviewsComponent } from './more-reviews.component';

describe('MoreReviewsComponent', () => {
  let component: MoreReviewsComponent;
  let fixture: ComponentFixture<MoreReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreReviewsComponent]
    });
    fixture = TestBed.createComponent(MoreReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
