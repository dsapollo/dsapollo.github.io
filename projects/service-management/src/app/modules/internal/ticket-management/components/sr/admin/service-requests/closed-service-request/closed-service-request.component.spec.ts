import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedServiceRequestComponent } from './closed-service-request.component';

describe('ClosedServiceRequestComponent', () => {
  let component: ClosedServiceRequestComponent;
  let fixture: ComponentFixture<ClosedServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedServiceRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
