import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default-button',
  template: `
    <button class="app-default-button">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./default-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultButtonComponent {}
