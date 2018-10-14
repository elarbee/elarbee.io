import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { LogoComponent } from './home/logo/logo.component';
import { TechIconsComponent } from './home/tech-icons/tech-icons.component';
import { SocialLinksComponent } from './home/social-links/social-links.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ParticlesModule } from 'angular-particle';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LogoComponent,
    TechIconsComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    ParticlesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
      FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
