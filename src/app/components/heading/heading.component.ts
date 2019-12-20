import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
    <header class="app-heading">
      <app-logo type="white"></app-logo>
      <app-main-navigation type="white"></app-main-navigation>
    </header>
  `,
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {}
