import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedCarsComponent } from './recently-added-cars.component';

describe('RecentlyAddedCarsComponent', () => {
  let component: RecentlyAddedCarsComponent;
  let fixture: ComponentFixture<RecentlyAddedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
