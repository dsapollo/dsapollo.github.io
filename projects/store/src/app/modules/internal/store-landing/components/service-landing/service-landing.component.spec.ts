import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLandingComponent } from './service-landing.component';

describe('ServiceLandingComponent', () => {
  let component: ServiceLandingComponent;
  let fixture: ComponentFixture<ServiceLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
