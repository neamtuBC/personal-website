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
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/project1.png')"
    },
    {
      projectName : "Responsive Theme",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "https://neamtubc.github.io/ArtistPortfolio/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/project2.png')"
    },
    {
      projectName : "A personal website",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "https://neamtubc.github.io/PersonalWebsite/",
      projectTechnologies: ["Jekyll", "HTML", "SASS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/project3.png')"
    },
    {
      projectName : "Canvas balls",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "https://neamtubc.github.io/BulineleMiscatoarele/",
      projectTechnologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      projectImage: "url('./assets/img/project4.png')"
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
