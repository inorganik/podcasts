import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PodcastPage } from '../models';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-page-via-resolver',
  templateUrl: './page-via-resolver.component.html',
  styleUrls: ['./page-via-resolver.component.scss']
})
export class PageViaResolverComponent implements OnInit {

  page$: Observable<PodcastPage>;

  constructor(
    private route: ActivatedRoute,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    this.page$ = this.route.paramMap.pipe(
      map(() => this.route.snapshot.data.page),
      tap(page => this.seo.generatePodcastTags(page)),
    );
  }

}
