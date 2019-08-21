import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(mod => mod.NotFoundModule) },
  { path: '', component: PageComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
