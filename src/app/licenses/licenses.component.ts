import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImagePopupComponent, Image } from '../shared/index';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicensesComponent {
  public licenses: Image[] = [
    {
      title: 'Аттестат соответствия 1',
      imgSrc: 'assets/img/certificates/certificate-1.jpg'
    },
    {
      title: 'Аттестат соответствия 2',
      imgSrc: 'assets/img/certificates/certificate-2.jpg'
    },
    {
      title: 'Свидетельство о государственной регистрации',
      imgSrc: 'assets/img/certificates/certificate-3.jpg'
    },
    {
      title: 'Сертификат соответствия',
      imgSrc: 'assets/img/certificates/certificate-4.jpg'
    },
    {
      title: 'Сертификат качества (eng)',
      imgSrc: 'assets/img/certificates/certificate-5.jpg'
    },
    {
      title: 'Сертификат качества (rus)',
      imgSrc: 'assets/img/certificates/certificate-6.jpg'
    }
  ];

  constructor(public dialog: MatDialog) {}

  public onLicenseClick(index: number): void {
    this.dialog.open(ImagePopupComponent, {
      width: 'auto',
      height: '90%',
      data: this.licenses[index]
    });
  }
}
