import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  standalone: true,
  templateUrl: './images.component.html'
})
export class ImagesComponent {
  ids: number[] = [];

  constructor() {
    for (let i = 0; i < 2; i++) {
      this.ids.push(i + 3);
    }
  }
}
