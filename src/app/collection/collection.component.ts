import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, take, map } from 'rxjs/operators';
import { PodcastPage } from '../models';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  page$: Observable<PodcastPage>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    this.page$ = this.route.params.pipe(
      switchMap(params => {
        const path = 'users/HODoi0MWLMNTUzON90aRukCvWur2/pages'
        return this.afs.collection<PodcastPage>(path, ref =>
          ref.where('slug', '==', params.slug)
        ).valueChanges().pipe(
          tap(result => console.log('got result', result[0].title)), 
          take(1)
        )
      }),
      map(pages => (pages.length) ? pages[0] : undefined),
      tap(page => this.seo.generatePodcastTags(page)),
      take(1)
    );
  }

}
