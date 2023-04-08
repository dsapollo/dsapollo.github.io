import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerMappingComponent } from './scheduler-mapping.component';

describe('SchedulerMappingComponent', () => {
  let component: SchedulerMappingComponent;
  let fixture: ComponentFixture<SchedulerMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
