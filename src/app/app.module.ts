import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './page/navigation/header/header.component';

@NgModule({
  declarations: [AppComponent, PageComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
