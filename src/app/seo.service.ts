import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title, private metaService: Meta) { }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateMetaTags(tags: { name: string, content: string }[]) {
    tags.forEach(tag => {
      this.metaService.updateTag({ name: tag.name, content: tag.content });
    });
  }

  setCanonicalURL(url?: string) {
    let link: HTMLLinkElement = document.querySelector(`link[rel='canonical']`) || null;
    if (link == null) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url ? url : window.location.href);
  }

  setRobots(content: string) {
    this.metaService.updateTag({ name: 'robots', content });
  }
}