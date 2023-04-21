import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancelApptModalComponent } from './view-cancel-appt-modal.component';

describe('ViewCancelApptModalComponent', () => {
  let component: ViewCancelApptModalComponent;
  let fixture: ComponentFixture<ViewCancelApptModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCancelApptModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancelApptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
