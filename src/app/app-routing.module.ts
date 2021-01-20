import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CollectionGroupComponent } from './collection-group/collection-group.component';
import { CollectionComponent } from './collection/collection.component';
import { DocComponent } from './doc/doc.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageViaResolverComponent } from './page-via-resolver/page-via-resolver.component';
import { PageResolver } from './resolvers/page.resolver';
import { WithTransferStateComponent } from './with-transfer-state/with-transfer-state.component';

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
    path: 'foo',
    component: AboutComponent,
  },
  {
    path: 'bar',
    component: AboutComponent
  },
  {
    path: 'baz',
    component: AboutComponent
  },
  {
    path: 'doc',
    component: DocComponent,
  },
  {
    path: 'collection/:slug',
    component: CollectionComponent,
  },
  {
    path: 'collection-group/:slug',
    component: CollectionGroupComponent,
  },
  {
    path: 'resolver/:slug',
    component: PageViaResolverComponent,
    resolve: { page: PageResolver },
  },
  {
    path: 'with-transfer-state/:slug',
    component: WithTransferStateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
