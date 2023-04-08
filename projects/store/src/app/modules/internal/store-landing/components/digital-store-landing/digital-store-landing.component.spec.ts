import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStoreLandingComponent } from './digital-store-landing.component';

describe('DigitalStoreLandingComponent', () => {
  let component: DigitalStoreLandingComponent;
  let fixture: ComponentFixture<DigitalStoreLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalStoreLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalStoreLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
