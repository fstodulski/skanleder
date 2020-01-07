import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ThemesTypes } from '@shared/types';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-heading',
  template: `
    <header
      [ngClass]="{
        'app-heading--with-background': (windowScroll$ | async) > 100
      }"
    >
      <app-content-container>
        <div class="app-heading">
          <app-logo [theme]="theme"></app-logo>
          <app-main-navigation *ngIf="withNavigation" [theme]="theme"></app-main-navigation>
        </div>
      </app-content-container>
    </header>
  `,
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  @Input() public readonly withNavigation: boolean;
  @Input() public readonly fixed?: boolean;
  @Input() public readonly theme?: ThemesTypes;

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
