import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take, tap } from 'rxjs/operators';
import { PageService } from '../services/page.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-with-transfer-state',
  templateUrl: './with-transfer-state.component.html',
  styleUrls: ['./with-transfer-state.component.scss']
})
export class WithTransferStateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public pageService: PageService,
    private seo: SeoService,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.pageService.page(params.slug).pipe(
        tap(page => this.pageService.pageBS.next(page))
      )),
      tap(result => console.log('[with transfer state] got result', result.title)), 
      tap(page => this.seo.generatePodcastTags(page)),
      take(2)
    ).subscribe();
  }

}
