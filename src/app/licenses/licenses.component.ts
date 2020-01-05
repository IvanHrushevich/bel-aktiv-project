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
      title: 'Свидетельство о государственной регистрации',
      imgSrc: 'assets/img/certificate-1.jpg'
    },
    {
      title: 'Сертификат соответствия',
      imgSrc: 'assets/img/certificate-2.jpg'
    },
    {
      title: 'Сертификат качества (eng)',
      imgSrc: 'assets/img/certificate-3.jpg'
    },
    {
      title: 'Сертификат качества (rus)',
      imgSrc: 'assets/img/certificate-4.jpg'
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
