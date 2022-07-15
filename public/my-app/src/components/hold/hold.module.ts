import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HoldComponent } from './hold';
import { HeaderComponent } from '../menuHeader/menuHeater';
import { FooterComponent } from '../footer-menu/footer-menu';
import { LoaderComponent } from '../loader/loader';
import { InicioComponent } from '../inicio/inicio';
import { UserComponent } from '../user/user';
import { LoginComponent } from '../login/login';


const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent }
]

@NgModule({
    declarations: [
        HoldComponent,
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        InicioComponent,
        UserComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [HoldComponent]
})

export class HoldModule { }