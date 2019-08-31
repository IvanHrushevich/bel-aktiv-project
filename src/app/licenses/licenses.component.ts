import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { License } from './license.model';
import { LicensePopupComponent } from './license-popup/license-popup.component';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicensesComponent {
  public licenses: License[] = [
    {
      title: 'Аттестат соответствия',
      imgSrc: 'assets/img/certificate-1.jpg'
    },
    {
      title: 'Аттестат соответствия',
      imgSrc: 'assets/img/certificate-2.jpg'
    }
  ];

  constructor(public dialog: MatDialog) {}

  public onLicenseClick(index: number): void {
    this.dialog.open(LicensePopupComponent, {
      width: 'auto',
      height: '90%',
      data: this.licenses[index]
    });
  }
}
