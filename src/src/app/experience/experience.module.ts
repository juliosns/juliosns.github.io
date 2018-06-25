import { Http } from '@angular/http';
import { ExperienceComponent } from './experience.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { PartnersComponent } from './partners/partners.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { MapService } from './../services/map.service';
import { ComponentLoaderService } from "app/services/component-loader.service";
import { ApiManagerService } from "app/services/api-manager.service";

export function translateLoader(http: Http) { return new TranslateStaticLoader(http, './../assets/lang/', '.json')}

const routes: Routes = [
  {path: '', redirectTo: 'peru', pathMatch: 'full'},
  {path: 'peru', component: PeruComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'partners/:country', component: PartnersComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularSvgIconModule,
    TranslateModule.forRoot({
        provide: TranslateLoader, 
        useFactory: translateLoader,
        deps: [Http]
    }),

  ],
  declarations: [PeruComponent, PartnersComponent, ExperienceComponent],
  providers: [MapService, ApiManagerService , ComponentLoaderService]
})
export class ExperienceModule { }
