import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AnimationsModule} from "./animations/animations.module";
import {MainComponent} from "./home/main/main.component";
import {AnimationsPageComponent} from "./animations/animations-page/animations-page.component";

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'animations', component: AnimationsPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
  exports: [
      RouterModule ,
      AnimationsModule
  ]
})

export class AppRoutingModule {

}