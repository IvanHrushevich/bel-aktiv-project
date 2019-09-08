import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatCardModule, MatDialogModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule],
  exports: [MatCardModule, MatDialogModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {}
