import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-thirdparty-page',
  standalone: true,
  imports: [CommonModule, NbButtonModule, NbIconModule,FontAwesomeModule],
  templateUrl: './thirdparty-page.component.html',
})
export class ThirdpartyPageComponent {}