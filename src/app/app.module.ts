import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionGroupComponent } from './collection-group/collection-group.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { DocComponent } from './doc/doc.component';
import { CollectionComponent } from './collection/collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageResolver } from './resolvers/page.resolver';
import { PageViaResolverComponent } from './page-via-resolver/page-via-resolver.component';
import { WithTransferStateComponent } from './with-transfer-state/with-transfer-state.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DocComponent,
    CollectionComponent,
    CollectionGroupComponent,
    PageViaResolverComponent,
    WithTransferStateComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
  ],
  providers: [PageResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
