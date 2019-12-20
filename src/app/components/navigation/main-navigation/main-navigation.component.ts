import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  template: `
    <nav class="app-main-navigation" role="navigation" title="Burger Menu">
      <div
        class="app-main-navigation__bar"
        [ngClass]="{
          'app-main-navigation__bar--white': type == 'white',
          'app-main-navigation__bar--black': type == 'black'
        }"
      ></div>
      <div
        class="app-main-navigation__bar"
        [ngClass]="{
          'app-main-navigation__bar--white': type == 'white',
          'app-main-navigation__bar--black': type == 'black'
        }"
      ></div>
      <div
        class="app-main-navigation__bar"
        [ngClass]="{
          'app-main-navigation__bar--white': type == 'white',
          'app-main-navigation__bar--black': type == 'black'
        }"
      ></div>
    </nav>
  `,
  styleUrls: ['./main-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavigationComponent {
  @Input() public readonly type: 'black' | 'white';
}
