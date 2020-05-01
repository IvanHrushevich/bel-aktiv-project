import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImagePopupComponent, Image } from '../shared/index';

@Component({
  selector: 'app-for-customers',
  templateUrl: './for-customers.component.html',
  styleUrls: ['./for-customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForCustomersComponent {
  image: Image = {
    title: 'Eвропейский банк реконструкции и развития',
    imgSrc: 'assets/img/certificates/european-bank.jpg'
  };

  constructor(public dialog: MatDialog) {}

  public onImageClick(): void {
    this.dialog.open(ImagePopupComponent, {
      width: 'auto',
      height: '95%',
      data: this.image
    });
  }
}
