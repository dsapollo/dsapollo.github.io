import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterMappingComponent } from './tester-mapping.component';

describe('TesterMappingComponent', () => {
  let component: TesterMappingComponent;
  let fixture: ComponentFixture<TesterMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
