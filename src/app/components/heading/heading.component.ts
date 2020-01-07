import { Component, Input } from '@angular/core';
import { ThemesTypes } from '@shared/types';

@Component({
  selector: 'app-heading',
  template: `
    <app-content-container>
      <header class="app-heading">
        <app-logo [theme]="theme"></app-logo>
        <app-main-navigation *ngIf="withNavigation" [theme]="theme"></app-main-navigation>
      </header>
    </app-content-container>
  `,
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {
  @Input() public readonly withNavigation: boolean;
  @Input() public readonly theme: ThemesTypes;
}
