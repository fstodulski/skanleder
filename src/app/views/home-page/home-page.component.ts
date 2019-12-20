import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <app-content-container>
      <app-heading></app-heading>
    </app-content-container>
    <app-main-page-banner></app-main-page-banner>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
