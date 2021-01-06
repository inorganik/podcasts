import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { PodcastPage } from '../models';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

  page$: Observable<PodcastPage>;

  constructor(
    private afs: AngularFirestore,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    const docPath = 'users/HODoi0MWLMNTUzON90aRukCvWur2/pages/mixes';
    this.page$ = this.afs.doc<PodcastPage>(docPath).valueChanges().pipe(
      tap(page => this.seo.generatePodcastTags(page)),
    );
  }

}
