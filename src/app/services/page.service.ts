import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { take, map, tap, shareReplay } from 'rxjs/operators';
import { PodcastPage } from '../models';

const pageStateKey = makeStateKey<PodcastPage>('podcastPage');

@Injectable({
  providedIn: 'root'
})
export class PageService {

  pageBS = new BehaviorSubject<PodcastPage>(null);
  page$ = this.pageBS.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));

  constructor(
    private transferState: TransferState,
    private afs: AngularFirestore,
  ) { }

  page(slug: string): Observable<PodcastPage> {
    // console.log('get page for slug', slug);
    if (!slug) {
      return throwError('No slug provided');
    }
    if (this.transferState.hasKey(pageStateKey)) {
      const page = this.transferState.get<PodcastPage>(pageStateKey, null);
      this.transferState.remove(pageStateKey);
      if (page && page.slug === slug) {
        console.log('page source: transfer state', page);
        return of(page);
      }
    }
    return this.afs.collectionGroup<PodcastPage>('pages', ref =>
      ref.where('slug', '==', slug)
    ).valueChanges().pipe(
      map(pages => (pages.length) ? pages[0] : undefined),
      tap(result => console.log('[page service] got result', result.title)),
      tap(page => {
        if (page) {
          this.transferState.set(pageStateKey, page);
        }
      }),
    );
  }
}
