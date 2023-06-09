import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailInformationComponent } from './trail-information.component';

describe('TrailInformationComponent', () => {
  let component: TrailInformationComponent;
  let fixture: ComponentFixture<TrailInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailInformationComponent]
    });
    fixture = TestBed.createComponent(TrailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
