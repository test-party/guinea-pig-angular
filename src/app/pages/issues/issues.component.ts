import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './issues.component.html'
})
export class IssuesComponent {
  readonly show = false;
}