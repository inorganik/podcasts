import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { PodcastPage } from '../models';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-collection-group',
  templateUrl: './collection-group.component.html',
  styleUrls: ['./collection-group.component.scss']
})
export class CollectionGroupComponent implements OnInit {

  page$: Observable<PodcastPage>

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    console.log('collection-group init');
    this.page$ = this.route.params.pipe(
      switchMap(params =>
        this.afs.collectionGroup<PodcastPage>('pages', ref =>
          ref.where('slug', '==', params.slug)
        ).valueChanges().pipe(
          tap(result => console.log('got result', result[0].title)), 
          take(1)
        )
      ),
      map(pages => (pages.length) ? pages[0] : undefined),
      tap(page => this.seo.generatePodcastTags(page)),
      take(1)
    );
  }

}
