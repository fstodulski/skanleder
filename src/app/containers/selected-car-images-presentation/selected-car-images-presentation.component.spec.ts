import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCarImagesPresentationComponent } from './selected-car-images-presentation.component';

describe('SelectedCarImagesPresentationComponent', () => {
  let component: SelectedCarImagesPresentationComponent;
  let fixture: ComponentFixture<SelectedCarImagesPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCarImagesPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCarImagesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
