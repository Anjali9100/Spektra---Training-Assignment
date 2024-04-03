import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FLibraryComponent } from './f-library.component';

describe('FLibraryComponent', () => {
  let component: FLibraryComponent;
  let fixture: ComponentFixture<FLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FLibraryComponent]
    });
    fixture = TestBed.createComponent(FLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
