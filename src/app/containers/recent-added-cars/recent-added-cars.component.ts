import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-added-cars',
  template: `
    <section class="app-recent-added-cars">
      <app-content-container>
        <h2 class="app-recent-added-cars__heading">
          Ostatnio dodane prace
        </h2>
        <ul class="app-recent-added-cars__list">
          <li
            class="app-recent-added-cars__list-element"
            *ngFor="let car of carList"
            [routerLink]="['/prace', car.slug]"
          >
            <app-car-box [car]="car"></app-car-box>
          </li>
        </ul>
      </app-content-container>
    </section>
  `,
  styleUrls: ['./recent-added-cars.component.scss'],
})
export class RecentAddedCarsComponent implements OnInit {
  public carList: Array<any>;

  ngOnInit(): void {
    this.carList = [
      {
        mainPhoto: {
          alt: null,
          url:
            'https://www.datocms-assets.com/19307/1578436759-martin-katler-nnr7z-8dto0-unsplash.jpg',
        },
        name: 'VW Golf',
        slug: 'vw-golf-2019',
        photos: [
          {
            alt: null,
            url:
              'https://www.datocms-assets.com/19307/1578436785-julian-hochgesang-g7swgef8prc-unsplash.jpg',
          },
          {
            alt: null,
            url:
              'https://www.datocms-assets.com/19307/1578436797-martin-katler-dzr-q9zq1dk-unsplash.jpg',
          },
          {
            alt: null,
            url:
              'https://www.datocms-assets.com/19307/1578436814-martin-katler-mdyat6mowsc-unsplash.jpg',
          },
          {
            alt: null,
            url:
              'https://www.datocms-assets.com/19307/1578436825-martin-katler-nnr7z-8dto0-unsplash.jpg',
          },
        ],
      },
      {
        mainPhoto: {
          alt: null,
          url:
            'https://www.datocms-assets.com/19307/1578436271-bruno-van-der-kraan-nle9lei16r4-unsplash.jpg',
        },
        name: 'Audi A4',
        slug: 'audi-a4',
        photos: [
          {
            alt: null,
            url:
              'https://www.datocms-assets.com/19307/1578436294-roberto-nickson-ioi3kcysn0o-unsplash.jpg',
          },
          {
            alt: null,
            url:
              'https://www.datocms-assets.com/19307/1578436482-matt-flores-taws44c3ddw-unsplash.jpg',
          },
        ],
      },
    ];
  }
}
