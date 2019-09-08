import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Output() closeSidenav: EventEmitter<void> = new EventEmitter();

  onLinkClick(): void {
    this.closeSidenav.emit();
  }
}
