import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CollectionGroupComponent } from './collection-group/collection-group.component';
import { CollectionComponent } from './collection/collection.component';
import { DocComponent } from './doc/doc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'doc',
    component: DocComponent,
  },
  {
    path: 'collection-group/:slug',
    component: CollectionGroupComponent,
  },
  {
    path: 'collection/:slug',
    component: CollectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
