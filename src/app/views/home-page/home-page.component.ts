import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <app-heading [withNavigation]="true" class="fixed" theme="white"></app-heading>
    <app-main-page-banner></app-main-page-banner>
    <app-recent-added-cars></app-recent-added-cars>
    <app-content-container>
      <app-default-footer></app-default-footer>
    </app-content-container>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
