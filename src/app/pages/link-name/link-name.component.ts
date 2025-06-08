import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-link-name',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './link-name.component.html',
  styles: ``
})
export class LinkNameComponent {
  items = ['Item 1', 'Item 2'];
}
