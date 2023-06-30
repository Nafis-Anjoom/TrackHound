import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSubmissionsComponent } from './submissions.component';

describe('TrackSubmissionsComponent', () => {
  let component: TrackSubmissionsComponent;
  let fixture: ComponentFixture<TrackSubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackSubmissionsComponent]
    });
    fixture = TestBed.createComponent(TrackSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
