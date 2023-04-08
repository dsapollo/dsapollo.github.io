import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskSrComponent } from './create-task-sr.component';

describe('CreateTaskSrComponent', () => {
  let component: CreateTaskSrComponent;
  let fixture: ComponentFixture<CreateTaskSrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaskSrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskSrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
