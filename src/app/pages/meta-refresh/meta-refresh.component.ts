import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-meta-refresh',
  standalone: true,
  templateUrl: './meta-refresh.component.html'
})
export class MetaRefreshComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ httpEquiv: 'refresh', content: '60' });
    this.meta.addTag({ httpEquiv: 'refresh', content: (60 * 60 * 20).toString() });
    this.meta.addTag({ httpEquiv: 'content-security-policy' });
    this.meta.addTag({ httpEquiv: 'content-type' });
    this.meta.addTag({ httpEquiv: 'default-style' });
  }
}
