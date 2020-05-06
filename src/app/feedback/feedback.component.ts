import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImagePopupComponent, Image } from '../shared/index';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent {
  public feedback: Image[] = [
    {
      title: 'Пинский мясокомбинат',
      imgSrc: 'assets/img/feedback/feedback-1.jpg'
    },
    {
      title: 'Юркас',
      imgSrc: 'assets/img/feedback/feedback-2.jpg'
    },
    {
      title: 'АрмисИнвестГрупп',
      imgSrc: 'assets/img/feedback/feedback-3.jpg'
    },
    {
      title: 'СУ-1 Белбуд',
      imgSrc: 'assets/img/feedback/feedback-4.jpg'
    },
    {
      title: 'Лего Лэнд',
      imgSrc: 'assets/img/feedback/feedback-5.jpg'
    },
    {
      title: 'МогилевВнешТранс',
      imgSrc: 'assets/img/feedback/feedback-6.jpg'
    },
    {
      title: 'Нюмэтью',
      imgSrc: 'assets/img/feedback/feedback-7.jpg'
    },
    {
      title: 'СТДев',
      imgSrc: 'assets/img/feedback/feedback-8.jpg'
    }
  ];

  constructor(public dialog: MatDialog) {}

  public onFeedbackClick(index: number): void {
    this.dialog.open(ImagePopupComponent, {
      width: 'auto',
      height: '90%',
      data: this.feedback[index]
    });
  }
}
