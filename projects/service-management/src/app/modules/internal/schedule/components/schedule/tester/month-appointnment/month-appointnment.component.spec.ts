import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthAppointnmentComponent } from './month-appointnment.component';

describe('MonthAppointnmentComponent', () => {
  let component: MonthAppointnmentComponent;
  let fixture: ComponentFixture<MonthAppointnmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthAppointnmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthAppointnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
