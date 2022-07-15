import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer-menu';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [FooterComponent]
})


export class FooterModule { }