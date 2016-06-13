import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component'
import {enableProdMode} from '@angular/core';
import {VJSConfig} from './vjs.config.service';

enableProdMode();
bootstrap(AppComponent, [VJSConfig]);
