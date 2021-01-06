import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CollectionGroupComponent } from './collection-group/collection-group.component';
import { HomeComponent } from './home/home.component';
import { PageResolver } from './resolvers/page.resolver';

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
    path: 'collection-group/:slug',
    component: CollectionGroupComponent,
    resolve: {
      page: PageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
