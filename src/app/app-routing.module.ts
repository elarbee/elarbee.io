import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AnimationsModule} from "./animations/animations.module";
import {MainComponent} from "./home/main/main.component";

export const routes: Routes = [
    {path: '', component: MainComponent}
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
