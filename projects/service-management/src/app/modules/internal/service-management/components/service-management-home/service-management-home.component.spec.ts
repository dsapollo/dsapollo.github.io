import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManagementHomeComponent } from './service-management-home.component';

describe('ServiceManagementHomeComponent', () => {
  let component: ServiceManagementHomeComponent;
  let fixture: ComponentFixture<ServiceManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceManagementHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
