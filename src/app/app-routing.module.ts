import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LicencesComponent } from './licences/licences.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(mod => mod.NotFoundModule) },
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'licences', component: LicencesComponent },
      { path: 'contacts', component: ContactsComponent }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
