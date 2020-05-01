import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Image } from '../models/index';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagePopupComponent {
  constructor(public dialogRef: MatDialogRef<ImagePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: Image) {}
}
