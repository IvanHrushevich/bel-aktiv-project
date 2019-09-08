import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter();

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
