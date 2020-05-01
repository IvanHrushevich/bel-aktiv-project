import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImagePopupComponent, Image } from '../shared/index';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsuranceComponent {
  image: Image = {
    title: 'Страховой полис',
    imgSrc: 'assets/img/insurance/insurance.jpg'
  };

  constructor(public dialog: MatDialog) {}

  public onImageClick(): void {
    this.dialog.open(ImagePopupComponent, {
      width: 'auto',
      height: '90%',
      data: this.image
    });
  }
}
