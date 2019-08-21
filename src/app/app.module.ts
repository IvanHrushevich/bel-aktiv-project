import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './page/navigation/header/header.component';
import { FooterComponent } from './page/navigation/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LicencesComponent } from './licences/licences.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, PageComponent, HeaderComponent, FooterComponent, AboutComponent, ProjectsComponent, LicencesComponent, ContactsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
