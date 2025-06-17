// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FontAwesomeModule),
    importProvidersFrom(
      NbThemeModule.forRoot({ name: 'default' }),
      NbEvaIconsModule
    ),
  ],
}).catch(err => console.error(err));
