import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Image } from './models/index';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Input()
  image: Image;
}
