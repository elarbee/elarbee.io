import {Component, OnInit} from '@angular/core';
import { PARTICLE_CONFIG } from './particle-config';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [
        trigger('panelFade', [
            state('unloaded', style({
                opacity: 0
            })),
            state('loaded',   style({
                opacity: 1
            })),
            transition('unloaded => loaded', animate('1000ms linear'))
        ])
    ]
})
export class MainComponent implements OnInit {

    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

    panelFade = 'unloaded';

    constructor() {
    }

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 0,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = PARTICLE_CONFIG;

        setTimeout(function () {
            this.panelFade = 'loaded';

        }.bind(this), 1000);
    }

}
