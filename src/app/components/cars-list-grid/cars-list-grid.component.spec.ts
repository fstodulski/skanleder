import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAddedCarsComponent } from './cars-list-grid.component';

describe('RecentAddedCarsComponent', () => {
  let component: RecentAddedCarsComponent;
  let fixture: ComponentFixture<RecentAddedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentAddedCarsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAddedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
