import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';
import { CarService } from '../../services/car/car.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  template: `
    <app-heading
      [withNavigation]="true"
      class="fixed"
      [theme]="(windowScroll$ | async) > 100 ? 'black' : 'white'"
    ></app-heading>
    <app-main-page-banner></app-main-page-banner>
    <app-recently-added-cars [cars]="cars$ | async"></app-recently-added-cars>
    <app-content-container>
      <app-default-footer></app-default-footer>
    </app-content-container>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public windowScroll$: Observable<number>;
  public cars$: Observable<any>;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: string,
    private readonly carService: CarService,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.cars$ = this.carService.getRecentlyAddedCars();

    this.title.setTitle('Skanleder - Strona Główna');

    if (isPlatformBrowser(this.platformId)) {
      const windowEvent = fromEvent(window, 'scroll');

      this.windowScroll$ = windowEvent.pipe(
        map(x => window.scrollY),
        startWith(0),
        distinctUntilChanged(),
        shareReplay(1)
      );
    }
  }
}
