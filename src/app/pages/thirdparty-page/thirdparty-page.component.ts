import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thirdparty-page',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FaIconComponent],
  templateUrl: './thirdparty-page.component.html',
})
export class ThirdpartyPageComponent {
  iconSearch = faSearch;
}