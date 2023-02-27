import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingpageComponent } from './admin-landingpage.component';

describe('AdminLandingpageComponent', () => {
  let component: AdminLandingpageComponent;
  let fixture: ComponentFixture<AdminLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLandingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
