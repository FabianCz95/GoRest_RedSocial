import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './menuHeater';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [HeaderComponent]
})

export class HEaderModule { }