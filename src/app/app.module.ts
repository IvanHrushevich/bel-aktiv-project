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
import { LicensesComponent } from './licenses/licenses.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PromoComponent } from './promo/promo.component';
import { ContactsBlockComponent } from './page/contacts-block/contacts-block.component';
import { SidenavComponent } from './page/navigation/sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForCustomersComponent } from './for-customers/for-customers.component';
import { SharedModule } from './shared/shared.module';
import { FeedbackComponent } from './feedback/index';
import { InsuranceComponent } from './insurance/index';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    LicensesComponent,
    ContactsComponent,
    PromoComponent,
    ContactsBlockComponent,
    SidenavComponent,
    NotFoundComponent,
    ForCustomersComponent,
    FeedbackComponent,
    InsuranceComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
