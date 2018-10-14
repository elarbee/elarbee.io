import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-icons',
  templateUrl: './tech-icons.component.html',
  styleUrls: ['./tech-icons.component.scss']
})
export class TechIconsComponent implements OnInit {

  icons = [
      { name:'Amazon Web Services', src:'../../../assets/devicons/amazonwebservices-original.svg'},
      { name:'Native Android', src:'../../../assets/devicons/android-original.svg'},
      { name:'Angular v2+', src:'../../../assets/devicons/angular.svg'},
      { name:'Native Apple', src:'../../../assets/devicons/apple-original.svg'},
      { name:'Babel.js', src:'../../../assets/devicons/babel-original.svg'},
      { name:'Django', src:'../../../assets/devicons/django-original.svg'},
      { name:'Docker', src:'../../../assets/devicons/docker-original.svg'},
      { name:'Java', src:'../../../assets/devicons/java-original.svg'},
      { name:'Javascript', src:'../../../assets/devicons/javascript-original.svg'},
      { name:'Linux', src:'../../../assets/devicons/linux-original.svg'},
      { name:'Mocha', src:'../../../assets/devicons/mocha-plain.svg'},
      { name:'MongoDB', src:'../../../assets/devicons/mongodb-original.svg'},
      { name:'mySQL', src:'../../../assets/devicons/mysql-original.svg'},
      { name:'Nginx', src:'../../../assets/devicons/nginx-original.svg'},
      { name:'Node.js', src:'../../../assets/devicons/nodejs-original.svg'},
      { name:'Python', src:'../../../assets/devicons/python-original.svg'},
      { name:'React', src:'../../../assets/devicons/react-original.svg'},
      { name:'Swift', src:'../../../assets/devicons/swift-original.svg'},
      { name:'Typescript', src:'../../../assets/devicons/typescript-original.svg'},
      { name:'Vue.js', src:'../../../assets/devicons/vuejs-original.svg'}
  ]

  // icon_list: Array<Array<String>> = Array((this.icons.length / 4) + 1).fill([]);

  constructor() {
      // let j = 0;
      // this.icons.forEach((icon, i) => {
      //       if(i%4 === 0){j++;}
      //       this.icon_list[j].push(icon)
      // })
      // console.log(this.icon_list);
  }

  ngOnInit() {

  }

}
