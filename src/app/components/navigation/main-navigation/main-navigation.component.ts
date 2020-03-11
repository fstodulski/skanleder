import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  template: `
    <nav class="app-main-navigation" role="navigation" title="Burger Menu" (click)="toggleBurger()">
      <div
        class="app-main-navigation__bar"
        [ngClass]="{
          'app-main-navigation__bar--white': theme == 'white',
          'app-main-navigation__bar--black': theme == 'black'
        }"
      ></div>
      <div
        class="app-main-navigation__bar"
        [ngClass]="{
          'app-main-navigation__bar--white': theme == 'white',
          'app-main-navigation__bar--black': theme == 'black'
        }"
      ></div>
      <div
        class="app-main-navigation__bar"
        [ngClass]="{
          'app-main-navigation__bar--white': theme == 'white',
          'app-main-navigation__bar--black': theme == 'black'
        }"
      ></div>
    </nav>

    <aside
      class="app-main-navigation__aside"
      [ngClass]="{
        'app-main-navigation__aside--active': isVisible
      }"
    ></aside>
  `,
  styleUrls: ['./main-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavigationComponent implements OnInit {
  @Input() public readonly theme: 'black' | 'white';

  public isVisible: boolean;

  ngOnInit(): void {
    this.isVisible = false;
  }

  public toggleBurger(): void {
    this.isVisible = !this.isVisible;
  }
}
