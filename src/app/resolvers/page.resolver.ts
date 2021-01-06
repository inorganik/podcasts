import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { PodcastPage } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<any> {

  constructor(
    private afs: AngularFirestore,
  ) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const slug = route.paramMap.get('slug');
    return this.afs.collectionGroup<PodcastPage>('pages', ref =>
      ref.where('slug', '==', slug)
    ).get().pipe(
      map(query => query.docs[0].data()),
    ).toPromise();

    // this way has the same result:
    //
    // .valueChanges().pipe(
    //   map(pages => (pages.length) ? pages[0] : undefined),
    //   first()
    // )
  }
}
