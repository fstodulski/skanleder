import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListGridComponent } from './cars-list-grid.component';

describe('CarsListGridComponent', () => {
  let component: CarsListGridComponent;
  let fixture: ComponentFixture<CarsListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarsListGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
