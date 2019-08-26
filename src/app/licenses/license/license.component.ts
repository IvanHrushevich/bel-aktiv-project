import { Component, Input } from '@angular/core';
import { License } from '../license.model';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent {
  @Input()
  license: License;
}
