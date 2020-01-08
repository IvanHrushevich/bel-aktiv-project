import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LicensesRoutingModule } from './licenses-routing.module';
import { LicensesComponent } from './licenses.component';
import { LicenseComponent } from './license/license.component';
import { LicensePopupComponent } from './license-popup/license-popup.component';

@NgModule({
  declarations: [LicensesComponent, LicenseComponent, LicensePopupComponent],
  entryComponents: [LicensePopupComponent],
  imports: [CommonModule, LicensesRoutingModule]
})
export class LicensesModule {}
