import { Component, OnInit } from '@angular/core';
import { ThemesTypes } from '@shared/types';

@Component({
  selector: 'app-landing-page',
  template: `
    <app-content-container>
      <app-heading [withNavigation]="withNavigation" [theme]="theme"></app-heading>

      <div class="app-landing-page">
        <main>
          <article class="app-landing-page__article">
            <p class="article-paragraph">
              Trwają prace techniczne nad nową stronę. Prosimy o wyrozumiałość.
            </p>
          </article>
        </main>
        <app-default-footer></app-default-footer>
      </div>
    </app-content-container>
  `,
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public theme: ThemesTypes = 'black';
  public withNavigation: boolean = false;
  public ngOnInit(): void {}
}
