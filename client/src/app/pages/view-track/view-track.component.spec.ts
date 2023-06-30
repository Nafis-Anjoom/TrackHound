import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrackComponent } from './view-track.component';

describe('ViewTrackComponent', () => {
  let component: ViewTrackComponent;
  let fixture: ComponentFixture<ViewTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTrackComponent]
    });
    fixture = TestBed.createComponent(ViewTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
