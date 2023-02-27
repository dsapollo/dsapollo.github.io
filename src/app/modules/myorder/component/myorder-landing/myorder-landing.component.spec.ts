import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorderLandingComponent } from './myorder-landing.component';

describe('MyorderLandingComponent', () => {
  let component: MyorderLandingComponent;
  let fixture: ComponentFixture<MyorderLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyorderLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyorderLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
