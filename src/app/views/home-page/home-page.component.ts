import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <app-heading [withNavigation]="true" theme="white"></app-heading>
    <app-main-page-banner></app-main-page-banner>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
