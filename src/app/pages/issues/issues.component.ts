import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImportComponent } from './import/import.component';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [CommonModule,FormsModule,ImportComponent], 
  templateUrl: './issues.component.html'
})
export class IssuesComponent {
  readonly show = false;
  showHidden = false;
  inputValue = '';
    user = { name: '', loggedIn: false };
  view = 'x';
  items = [null, undefined, 'Item 1', 'Item 2'];
  active = false;
  selected = '';

  doSomething(): void {
    console.log('Clicked non-semantic element');
  }
}