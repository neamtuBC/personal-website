import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

import { slideInOutAnimation } from '../_animations/fadeIn';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass'],
  animations: [
    trigger('description', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.4s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .5}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]),{optional: true})
      ])
    ]),
  slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }

})
export class WorkComponent implements OnInit {

  allProjects = [
    {
      projectName : "The history of Cluj",
      projectDescription : "A responsive website for a nice presentation of the history of Cluj-Napoca. This website is designed as a timeline which contains several sections from different perionds of time.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/istoriaclujului.jpg')",
      smallImage: "url('./assets/img/istoriaclujului-small.jpg')"
    },
    {
      projectName : "Responsive Theme",
      projectDescription : "A resposive theme where the owner can publish informations about his work, skills or about his clients. The information displayed on the page can be easily edited just by modifying a txt file. Therefore, the owner does not have to know to code for editing his personal page.",
      projectURL: "https://neamtubc.github.io/ArtistPortfolio/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/arthisttheme.jpg')",
      smallImage: "url('./assets/img/arthisttheme-small.jpg')"
    },
    {
      projectName : "A personal website",
      projectDescription : "I have developed this website as an exercise, to apply some concepts like transitions, animations and more others. I was following the steps from a tutorial of DevTips but I used my personal design.",
      projectURL: "https://neamtubc.github.io/PersonalWebsite/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/apersonalwebsite.jpg')",
      smallImage: "url('./assets/img/apersonalwebsite-small.jpg')"
    },
    {
      projectName : "Canvas balls",
      projectDescription : "A little project in which i have tested the canvas properties. This website contains several balls which are changing their position permanently. The user can interact with these balls with the mouse cursor.",
      projectURL: "https://neamtubc.github.io/BulineleMiscatoarele/",
      projectTechnologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/canvasballs.jpg')",
      smallImage: "url('./assets/img/canvasballs.jpg')"
    },
  ]

  currentProject = {}
  flag = false;

  constructor() { }

  ngOnInit() {
  }

  changeProject(index){
    this.currentProject = this.allProjects[index];
    this.flag = true;
  }

  disableDescription(){
    this.flag = false;
  }
}
