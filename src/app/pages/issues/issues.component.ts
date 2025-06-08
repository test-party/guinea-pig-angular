import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [CommonModule,FormsModule], 
  templateUrl: './issues.component.html'
})
export class IssuesComponent {
  readonly show = false;
  showHidden = false;
  items = [1, 2, 3];
  inputValue = '';

  doSomething(): void {
    console.log('Clicked non-semantic element');
  }
}