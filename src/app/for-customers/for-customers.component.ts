import { Component, ChangeDetectionStrategy } from '@angular/core';

import { License, LicensePopupComponent } from '../licenses/index';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-for-customers',
  templateUrl: './for-customers.component.html',
  styleUrls: ['./for-customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForCustomersComponent {
  license: License = {
    title: 'Eвропейский банк реконструкции и развития',
    imgSrc: 'assets/img/certificates/european-bank.jpg'
  };

  constructor(public dialog: MatDialog) {}

  public onLicenseClick(index: number): void {
    this.dialog.open(LicensePopupComponent, {
      width: 'auto',
      height: '95%',
      data: this.license
    });
  }
}
