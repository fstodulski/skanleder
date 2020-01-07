import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-car-images-presentation',
  template: `
    <section class="app-selected-car-images-presentation">
      <ul class="app-selected-car-images-presentation__list">
        <li
          class="app-selected-car-images-presentation__list-element"
          *ngFor="let car of carPhotos"
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
  @Input() public readonly carPhotos: Array<any>;

  public selectedImage: string;

  @HostListener('document:keydown.escape') onKeydownHandler(): void {
    this.selectedImage = undefined;
  }

  ngOnInit(): void {}

  public selectImage(url: string): void {
    this.selectedImage = url;
  }

  public closePreview(): void {
    this.selectedImage = undefined;
  }
}
