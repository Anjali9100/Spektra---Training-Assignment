import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElementDataDisplayComponent } from './select-element-data-display.component';

describe('SelectElementDataDisplayComponent', () => {
  let component: SelectElementDataDisplayComponent;
  let fixture: ComponentFixture<SelectElementDataDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectElementDataDisplayComponent]
    });
    fixture = TestBed.createComponent(SelectElementDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
