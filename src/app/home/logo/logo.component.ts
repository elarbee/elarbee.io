import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from "@angular/animations";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
      trigger('spin', [
          state('static', style({})),
          state('spinning',   style({})),
          transition('static => spinning', animate('0.3s linear',  keyframes([
              style({ transform: 'rotateY(0deg)', offset: 0 }),
              style({ transform: 'rotateY(90deg)', offset: 0.5 }),
              style({ transform: 'rotateY(0deg)', offset: 1 })
          ])))
      ])
  ]
})
export class LogoComponent implements OnInit {

  spin = 'static';
  constructor() { }

  ngOnInit() {
  }

  mouseEnter(){
    this.spin = 'spinning';
    console.log('Mouse Enter');
  }

  mouseLeave(){
    this.spin='static';
  }
}
