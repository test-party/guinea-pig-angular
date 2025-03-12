import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-img-alt',
  standalone: true,
  templateUrl: './svg-img-alt.component.html'
})
export class SvgImgAltComponent {
  onClick(): void {
    console.log("SVG clicked!");
  }
}
