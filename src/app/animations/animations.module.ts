import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsPageComponent } from './animations-page/animations-page.component';
import { TestComponent } from './test/test.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [AnimationsPageComponent, TestComponent, LogoComponent]
})
export class AnimationsModule { }
