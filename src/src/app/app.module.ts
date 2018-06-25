import { SharedModule } from './../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { Injectable } from '@angular/core';

import { NgModule, Type, Directive, Component } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/en', pathMatch: 'full'}, 
  {path: '', component: SplashComponent}
];

export function translateLoader(http: Http) { return new TranslateStaticLoader(http, './../assets/lang/', '.json')}


@NgModule({ 
  declarations: [ 
    AppComponent,
    SplashComponent,
  ],
  entryComponents: [
  ], 
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularSvgIconModule, 
    TranslateModule.forRoot({
        provide: TranslateLoader, 
        useFactory: translateLoader,
        deps: [Http]
    }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }