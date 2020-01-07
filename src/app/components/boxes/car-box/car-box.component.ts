import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-box',
  template: `
    <div class="app-car-box">
      <figure class="app-car-box__figure">
        <img [src]="car.mainPhoto.url" [alt]="car.mainPhoto.alt" class="app-car-box__image" />
      </figure>

      <div class="app-car-box__label">
        <span class="label__car-name">
          {{ car.name }}
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./car-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarBoxComponent implements OnInit {
  @Input() public readonly car: any;

  ngOnInit(): void {}
}
