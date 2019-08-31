import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { License } from '../license.model';

@Component({
  selector: 'app-license-popup',
  templateUrl: './license-popup.component.html',
  styleUrls: ['./license-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicensePopupComponent {
  constructor(public dialogRef: MatDialogRef<LicensePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: License) {}
}
