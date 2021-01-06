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

  page: PodcastPage

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('resolved data', this.route.snapshot.data.title);
    this.page = this.route.snapshot.data.page;
  }

}
