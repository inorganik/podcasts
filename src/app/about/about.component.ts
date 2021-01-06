import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'About',
      slug: '',
      description: 'THIS IS THE ABOUT PAGE'
    });
  }

}
