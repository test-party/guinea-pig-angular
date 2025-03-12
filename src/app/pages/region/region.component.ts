import { Component } from '@angular/core';
import { ImportComponent } from './import/import.component';

@Component({
  selector: 'app-region',
  standalone: true,
  imports: [ImportComponent], 
  templateUrl: './region.component.html'
})
export class RegionComponent {}
