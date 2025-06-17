import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NbCardModule } from '@nebular/theme';
import { NbTabsetModule } from '@nebular/theme';
import { FancyBoxComponent } from 'external-component';

@Component({
  selector: 'app-thirdparty-page',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FaIconComponent,NbCardModule,NbTabsetModule,FancyBoxComponent],
  templateUrl: './thirdparty-page.component.html',
})
export class ThirdpartyPageComponent {
  iconSearch = faSearch;
}