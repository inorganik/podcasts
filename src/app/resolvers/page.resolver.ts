import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PageService } from '../services/page.service';
import { first } from 'rxjs/operators';
import { PodcastPage } from '../models';

@Injectable()
export class PageResolver implements Resolve<Observable<PodcastPage>> {

  constructor(private pageService: PageService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PodcastPage> {
    const slug = route.paramMap.get('slug');
    return this.pageService.page(slug).pipe(
      first()
    );
  }
}
