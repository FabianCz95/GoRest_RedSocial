import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { HoldModule } from './components/hold/hold.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HoldModule)
  .catch(err => console.error(err));
