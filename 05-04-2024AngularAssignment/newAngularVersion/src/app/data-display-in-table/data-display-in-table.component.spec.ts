import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayInTableComponent } from './data-display-in-table.component';

describe('DataDisplayInTableComponent', () => {
  let component: DataDisplayInTableComponent;
  let fixture: ComponentFixture<DataDisplayInTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDisplayInTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDisplayInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
