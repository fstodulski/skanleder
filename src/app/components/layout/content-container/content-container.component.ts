import { Component } from '@angular/core';

@Component({
  selector: 'app-content-container',
  template: `
    <div class="app-content-container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent {}
