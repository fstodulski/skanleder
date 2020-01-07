import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-footer',
  template: `
    <footer class="app-default-footer">
      <article class="app-default-footer__content">
        <p class="content">ul. Zachodnia 2</p>
        <p class="content">11-500, Giżycko</p>
        <p class="content">
          Tel: <a class="content__href" href="tel:+48 602 875 244">+48 602 875 244</a>
        </p>
        <p class="content">
          <a class="content__href" href="mailto:skanleder@wp.pl">
            skanleder@wp.pl
          </a>
        </p>
        <p class="content">Bank PKO SA. 83 1240 1617 1111 0010 1704 4216</p>
      </article>
      <article class="app-default-footer__copyright copyright">
        <p class="copyright__skanleder">Skanleder {{ currentYear }}</p>

        <p class="copyright__made-by">
          Made by<a class="made-by__link" href="https://www.gentlemans-code.co/">
            Gentleman's Code</a
          >
        </p>
      </article>
    </footer>
  `,
  styleUrls: ['./default-footer.component.scss'],
})
export class DefaultFooterComponent implements OnInit {
  public currentYear: number;
  constructor() {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
