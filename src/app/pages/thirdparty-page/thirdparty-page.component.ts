import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'app-thirdparty-page',
  standalone: true,
  imports: [CommonModule, NbButtonModule, NbIconModule],
  templateUrl: './thirdparty-page.component.html',
})
export class ThirdpartyPageComponent {}