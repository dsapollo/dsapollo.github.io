import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermappingComponent } from './usermapping.component';

describe('UsermappingComponent', () => {
  let component: UsermappingComponent;
  let fixture: ComponentFixture<UsermappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
