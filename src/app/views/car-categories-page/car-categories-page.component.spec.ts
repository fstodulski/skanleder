import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCategoriesPageComponent } from './car-categories-page.component';

describe('CarCategoriesPageComponent', () => {
  let component: CarCategoriesPageComponent;
  let fixture: ComponentFixture<CarCategoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCategoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
