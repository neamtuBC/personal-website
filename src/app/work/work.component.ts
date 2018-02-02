import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass'],
  animations: [
    trigger('description', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]),{optional: true})
      ])
    ])
  ]
})
export class WorkComponent implements OnInit {

  allProjects = [
    {
      projectName : "The history of Cluj",
      projectDescription : "A responsive website for a nice presentation of the history of Cluj-Napoca. The website is designed as a timeline witch contains several sections.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/istoriaclujului.jpg')"
    },
    {
      projectName : "Responsive Theme",
      projectDescription : "A resposive theme where the owner can publish informations about his work, skills or his clients. The information displayed on the page can be easly edited just by modify a txt file. So, the owner does not have to know to code for editing his personal page.",
      projectURL: "https://neamtubc.github.io/ArtistPortfolio/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/arthisttheme.jpg')"
    },
    {
      projectName : "A personal website",
      projectDescription : "I developed this website as an exercise for practice some concepts as transitions, animations and more others. I folowed a tutotial from DevTips but I used my personal design.",
      projectURL: "https://neamtubc.github.io/PersonalWebsite/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/apersonalwebsite.jpg')"
    },
    {
      projectName : "Canvas balls",
      projectDescription : "A little project where I tested the canvas properties. The website contains severals balls witch are changing their position permanently. The user can interact with this balls with the mouse cursor.",
      projectURL: "https://neamtubc.github.io/BulineleMiscatoarele/",
      projectTechnologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/canvasballs.jpg')"
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
