import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionErrorModal } from './connection-error.component';

describe('ConnectionErrorComponent', () => {
  let component: ConnectionErrorModal;
  let fixture: ComponentFixture<ConnectionErrorModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectionErrorModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectionErrorModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
