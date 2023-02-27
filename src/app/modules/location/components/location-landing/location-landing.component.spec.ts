import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationLandingComponent } from './location-landing.component';

describe('LocationLandingComponent', () => {
  let component: LocationLandingComponent;
  let fixture: ComponentFixture<LocationLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
