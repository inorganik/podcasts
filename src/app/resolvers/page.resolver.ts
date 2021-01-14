import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PageService } from '../services/page.service';
import { first } from 'rxjs/operators';
import { PodcastPage } from '../models';

@Injectable()
export class PageResolver implements Resolve<Observable<PodcastPage>> {

  constructor(
    private pageService: PageService,
    // private afs: AngularFirestore,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PodcastPage> {
    const slug = route.paramMap.get('slug');
    // get via collection group from service
    return this.pageService.page(slug).pipe(
      first()
    );
    // get via doc()
    // const docPath = 'users/HODoi0MWLMNTUzON90aRukCvWur2/pages/' + slug;
    // return this.afs.doc<PodcastPage>(docPath).valueChanges().pipe(
    //   first()
    // );
  }
}
