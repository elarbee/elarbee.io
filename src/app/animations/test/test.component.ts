import { Component, OnInit } from '@angular/core';

import * as Two from 'two.js';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawShapes();
  }


  drawShapes(){
      let elem = document.getElementById('draw-animation');
      const width = 800;
      const height = 800;

      let two = new Two({ width: width, height: height}).appendTo(elem);

      this.drawDegradingSinWaves(two);

      let text = new Two.Text('Hello World', 50, 10);
      text.size = '26';
      text.fill = 'white';
      text.stroke = 'white';

      // two.add(text);
      two.update();
  }

  drawDegradingSinWaves(two) {
      let config = {
          width: 800,
          sampleSize: 1000,
          periods: 8,
          amplitude: 25,
          offset: 400
      }

      let configs : SinConfig[] = [];
      for(let i=0; i< 8; i++){
          let c = config;
          c.sampleSize = (i / 8.0) * 100;
          c.offset = (i / 8.0) * 800;

          configs.push(c);
      };

      console.log(configs);

      configs.forEach(c => this.drawSinWaves(two, c))
  }

  drawSinWaves(two: any, config: SinConfig) {
      const vertices = this.sinWaveVertices(config);
      let anchors = [];

      vertices.forEach((vertex) => anchors.push(new Two.Anchor(vertex.x, vertex.y)));

      let path = new Two.Path(anchors, false, false, false);


      path.linewidth = 1;
      path.stroke = "white";
      path.fill = 'transparent';

      two.add(path);
  }

  drawCosWaves(two: any, config: SinConfig) {
        const vertices = this.cosWaveVertices(config);
        let anchors = [];

        console.log(vertices);
        vertices.forEach((vertex) => anchors.push(new Two.Anchor(vertex.x, vertex.y)));

        let path = new Two.Path(anchors, false, false, false);


        path.linewidth = 1;
        path.stroke = "white";
        path.fill = 'transparent';

        two.add(path);
    }

  sinWaveVertices(config: SinConfig) {
      const end = config.periods * Math.PI;
      let vertices: Vertex[] = [];
      for(let i = 0; i <= config.sampleSize; i++) {

          const x = ((i/config.sampleSize) * end);
          const y = (Math.sin(x));
          vertices.push({x:x, y:y});
      }

      vertices = vertices.map((vertex) => {
            return {x: (vertex.x / end) * config.width, y: (vertex.y * config.amplitude) + config.offset}
      })

      return vertices;
  }

  cosWaveVertices(config: SinConfig) {
        const end = config.periods * Math.PI;
        let vertices: Vertex[] = [];
        for(let i = 0; i <= config.sampleSize; i++) {

            const x = ((i/config.sampleSize) * end);
            const y = (Math.cos(x));
            vertices.push({x:x, y:y});
        }

        vertices = vertices.map((vertex) => {
            return {x: (vertex.x / end) * config.width, y: (vertex.y * config.amplitude) + config.offset}
        })

        return vertices;
    }
}

// All data needed to generate a sin wave
interface SinConfig {
    width: number; // Width of the sin wave ( relative to canvas size )
    sampleSize: number;  // Number of vertices to return. Higher number is higher resolution
    periods: number;  // Number of sin wave periods
    amplitude: number; // Height and depth of sin waves
    offset: number; // Vertical offset of the sinwave.
}

interface Vertex {
    x:number;
    y: number;
}
