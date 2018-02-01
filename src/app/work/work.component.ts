import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  allProjects = [
    {
      projectName : "First Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["unu", "doi", "trei"],
      projectImage: "url('../../assets/img/project1.png')"
    },
    {
      projectName : "Second Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project2.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
    },
    {
      projectName : "Third Project",
      projectDescription : "Nullam nec lobortis felis. Morbi vel mattis lectus. Cras condimentum finibus molestie. Pellentesque sed blandit lectus. Ut tincidunt sapien risus, id fermentum lorem imperdiet non. Ut finibus sagittis justo. Pellentesque massa elit, posuere in erat a, pulvinar sagittis enim.",
      projectURL: "http://www.istoriaclujului.ml/",
      projectTechnologies: ["patru", "cinci", "sase"],
      projectImage: "url('../../assets/img/project3.png')"
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
