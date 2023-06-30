import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSubmissionsComponent } from './more-submissions.component';

describe('MoreSubmissionsComponent', () => {
  let component: MoreSubmissionsComponent;
  let fixture: ComponentFixture<MoreSubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreSubmissionsComponent]
    });
    fixture = TestBed.createComponent(MoreSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
