import { NgModule } from '@angular/core';

import { ImagePopupComponent, ImageComponent } from './image/index';

@NgModule({
  declarations: [ImageComponent, ImagePopupComponent],
  exports: [ImageComponent, ImagePopupComponent],
  entryComponents: [ImagePopupComponent]
})
export class SharedModule {}
