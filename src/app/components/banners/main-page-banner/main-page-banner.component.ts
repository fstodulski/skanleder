import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-banner',
  template: `
    <section class="app-main-page-banner">
      <figure class="app-main-page-banner__figure">
        <img
          src="/assets/banner_background_interior_image.jpg"
          alt="Interior Image"
          class="app-main-page-banner__image"
        />
      </figure>

      <!--      Main Banner Text-->
      <app-content-container class="app-main-page-banner__banner-text-wrapper">
        <article class="banner-text-wrapper">
          <h1 class="banner-text-wrapper__heading">
            Tworzymy wnętrza <br />
            z charakterem.
          </h1>
          <h3 class="banner-text-wrapper__sub-heading">
            Przekonaj się sam
          </h3>
          <app-default-button routerLink="/wykonane-prace">
            Nasze prace
          </app-default-button>
        </article>
      </app-content-container>
    </section>
  `,
  styleUrls: ['./main-page-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageBannerComponent implements OnInit {
  public ngOnInit(): void {}
}
