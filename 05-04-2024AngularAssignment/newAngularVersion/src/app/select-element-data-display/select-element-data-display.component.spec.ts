import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElementDataDisplayComponent } from './select-element-data-display.component';

describe('SelectElementDataDisplayComponent', () => {
  let component: SelectElementDataDisplayComponent;
  let fixture: ComponentFixture<SelectElementDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectElementDataDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectElementDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
