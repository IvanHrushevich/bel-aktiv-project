import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LicensesComponent } from './licenses/licenses.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { PromoComponent } from './promo/promo.component';

const routes: Routes = [
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(mod => mod.NotFoundModule) },
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'licenses', component: LicensesComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: '', component: PromoComponent, pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
