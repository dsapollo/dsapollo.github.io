import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekAppointnmentComponent } from './week-appointnment.component';

describe('WeekAppointnmentComponent', () => {
  let component: WeekAppointnmentComponent;
  let fixture: ComponentFixture<WeekAppointnmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekAppointnmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekAppointnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
