import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-car-images-presentation',
  template: `
    <section class="app-selected-car-images-presentation">
      <ul class="app-selected-car-images-presentation__list">
        <li
          class="app-selected-car-images-presentation__list-element"
          *ngFor="let car of carData.photos"
        >
          <figure class="app-selected-car-images-presentation__figure">
            <img
              (click)="selectImage(car.url)"
              [src]="car.url"
              [alt]="car.alt"
              class="app-selected-car-images-presentation__image"
            />
          </figure>
        </li>
      </ul>
    </section>

    <aside
      class="app-selected-car-images-presentation__preview"
      (click)="closePreview()"
      [ngClass]="{
        'app-selected-car-images-presentation__preview--active': selectedImage
      }"
    >
      <div class="preview__wrapper">
        <img [src]="selectedImage && selectedImage" alt="" class="preview__image" />
      </div>
    </aside>
  `,
  styleUrls: ['./selected-car-images-presentation.component.scss'],
})
export class SelectedCarImagesPresentationComponent implements OnInit {
  public selectedImage: string;

  public carData: any;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(): void {
    this.selectedImage = undefined;
  }

  ngOnInit(): void {
    this.carData = {
      mainPhoto: {
        alt: null,
        url:
          'https://www.datocms-assets.com/19307/1578436759-martin-katler-nnr7z-8dto0-unsplash.jpg',
      },
      name: 'VW Golf',
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
      slug: 'vw-golf-2019',
    };
  }

  public selectImage(url: string): void {
    this.selectedImage = url;
  }

  public closePreview(): void {
    this.selectedImage = undefined;
  }
}
