import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHeaderComponent } from './track-header.component';

describe('TrackHeaderComponent', () => {
  let component: TrackHeaderComponent;
  let fixture: ComponentFixture<TrackHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackHeaderComponent]
    });
    fixture = TestBed.createComponent(TrackHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
