import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { License } from '../license.model';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicenseComponent {
  @Input()
  license: License;
}
