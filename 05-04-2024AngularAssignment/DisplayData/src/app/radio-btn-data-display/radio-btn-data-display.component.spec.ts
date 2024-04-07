import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBtnDataDisplayComponent } from './radio-btn-data-display.component';

describe('RadioBtnDataDisplayComponent', () => {
  let component: RadioBtnDataDisplayComponent;
  let fixture: ComponentFixture<RadioBtnDataDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioBtnDataDisplayComponent]
    });
    fixture = TestBed.createComponent(RadioBtnDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
