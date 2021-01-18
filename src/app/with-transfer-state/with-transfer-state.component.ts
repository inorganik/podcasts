import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PodcastPage } from '../models';
import { PageService } from '../services/page.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-with-transfer-state',
  templateUrl: './with-transfer-state.component.html',
  styleUrls: ['./with-transfer-state.component.scss']
})
export class WithTransferStateComponent implements OnInit {

  page$: Observable<PodcastPage>;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private seo: SeoService,
  ) { }

  ngOnInit(): void {
    this.page$ = this.route.params.pipe(
      switchMap(params => this.pageService.page(params.slug)),
      tap(result => console.log('[with transfer state] got result', result.title)), 
      tap(page => this.seo.generatePodcastTags(page)),
    );
  }

}
