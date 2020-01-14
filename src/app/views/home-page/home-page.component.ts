import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  template: `
    <app-heading
      [withNavigation]="true"
      class="fixed"
      [theme]="(windowScroll$ | async) > 100 ? 'black' : 'white'"
    ></app-heading>
    <app-main-page-banner></app-main-page-banner>
    <app-recent-added-cars></app-recent-added-cars>
    <app-content-container>
      <app-default-footer></app-default-footer>
    </app-content-container>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public windowScroll$: Observable<number>;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: string) {}

  ngOnInit(): void {
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
