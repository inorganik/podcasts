import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PodcastPage } from '../models';

export interface MetaTagData {
  title: string;
  slug: string;
  description?: string;
  image?: string;
  twitter?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  generatePodcastTags(page: PodcastPage) {
    const title = `${page.title} is on Podfan`;
    const description = `Listen to and support ${page.title} on Podfan`;
    const tags: MetaTagData = {
      title,
      description,
      image: page.artUrl600,
      slug: page.slug
    };
    if (page.socialLinks && page.socialLinks.twitter) {
      tags.twitter = `@${page.socialLinks.twitter}`;
    }
    this.setTags(tags);
  }

  generateTags(metaTags: MetaTagData) {
    const tags: MetaTagData = {
      image: 'https://pod.fan/assets/img/podfan-preview.jpg',
      slug: '',
      ...metaTags
    };
    const defaultDesc = 'This is a test description';
    tags.description = (metaTags.description) ? metaTags.description : defaultDesc;
    tags.title = `Podfan • ${tags.title}`;
    this.setTags(tags);
  }

  // Set title and meta tags
  setTags(tags: MetaTagData): void {
    this.titleService.setTitle(tags.title);

    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    if (tags.twitter) {
      this.meta.updateTag({ name: 'twitter:creator', content: tags.twitter });
    }
    this.meta.updateTag({ name: 'description', content: tags.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Podfan' });
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
  }
}
