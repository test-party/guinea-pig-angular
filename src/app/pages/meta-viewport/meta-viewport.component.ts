import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-meta-viewport',
  standalone: true,
  templateUrl: './meta-viewport.component.html'
})
export class MetaViewportComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'viewport' });
    this.meta.addTag({ name: 'viewport', content: 'user-scalable=no' });
    this.meta.addTag({ name: 'viewport', content: 'user-scalable=no, maximum-scale=2.6' });
    this.meta.addTag({ name: 'viewport', content: 'user-scalable=no, maximum-scale=1' });
  }
}
