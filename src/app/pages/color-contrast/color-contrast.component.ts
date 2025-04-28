import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-color-contrast',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './color-contrast.component.html',
  styles: ``
})
export class ColorContrastComponent {
  backgroundColor = '#ffffff';
  color = '#999999';
}
