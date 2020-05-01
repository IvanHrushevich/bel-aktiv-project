import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LicensesComponent } from './licenses/licenses.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { PromoComponent } from './promo/promo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForCustomersComponent } from './for-customers/for-customers.component';
import { FeedbackComponent } from './feedback/index';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'licenses', component: LicensesComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'for-customers', component: ForCustomersComponent },
      { path: '', component: PromoComponent, pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
